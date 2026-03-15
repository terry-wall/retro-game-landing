FROM node:20-alpine AS builder

WORKDIR /app

# Clear npm cache and set registry
RUN npm cache clean --force
RUN npm config set registry https://registry.npmjs.org/

# Copy package files
COPY package.json ./

# Install dependencies with specific flags to handle potential issues
RUN npm install --no-optional --no-shrinkwrap --no-package-lock --legacy-peer-deps

# Copy source code
COPY . .

# Build the application
ENV NEXT_PRIVATE_SKIP_TYPECHECKING=1
RUN npm run build

FROM node:20-alpine

WORKDIR /app

# Install dumb-init for proper signal handling
RUN apk add --no-cache dumb-init

# Copy built application from builder stage
COPY --from=builder /app/package.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

ENV PORT=3000
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD node -e "fetch('http://localhost:3000/').then(r=>{process.exit(r.ok?0:1)}).catch(()=>process.exit(1))"

CMD ["dumb-init", "npm", "run", "start"]