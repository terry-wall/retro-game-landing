FROM node:20-alpine

WORKDIR /app

# Clean npm cache and set registry explicitly
RUN npm cache clean --force
RUN npm config set registry https://registry.npmjs.org/

# Copy package.json
COPY package.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the application
ENV NEXT_PRIVATE_SKIP_TYPECHECKING=1
RUN npm run build

# Set up runtime
ENV PORT=3000
EXPOSE 3000

# Add healthcheck
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD node -e "fetch('http://localhost:3000/').then(r=>{process.exit(r.ok?0:1)}).catch(()=>process.exit(1))"

CMD ["npm", "start"]