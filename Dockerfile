FROM node:20-alpine AS builder

WORKDIR /app

# Enable yarn
RUN corepack enable

# Copy package files first
COPY package.json ./
COPY yarn.lock* ./

# Install dependencies with yarn
RUN yarn install --frozen-lockfile --network-timeout 100000

# Copy source code
COPY . .

# Build the application
ENV NEXT_PRIVATE_SKIP_TYPECHECKING=1
RUN yarn build

FROM node:20-alpine

WORKDIR /app

# Install dumb-init for proper signal handling
RUN apk add --no-cache dumb-init

# Enable yarn
RUN corepack enable

# Copy built application from builder stage
COPY --from=builder /app/package.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

ENV PORT=3000
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD node -e "fetch('http://localhost:3000/').then(r=>{process.exit(r.ok?0:1)}).catch(()=>process.exit(1))"

CMD ["dumb-init", "yarn", "start"]