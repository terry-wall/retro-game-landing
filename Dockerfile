FROM node:22-alpine

# Create app directory
WORKDIR /usr/src/app

# Install dependencies
COPY package.json ./
RUN npm install --no-package-lock

# Bundle app source
COPY . .

# Build the application
ENV NEXT_PRIVATE_SKIP_TYPECHECKING=1
RUN npm run build

# Expose port
EXPOSE 3000

# Define the runtime command
CMD ["npm", "start"]