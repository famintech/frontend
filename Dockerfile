# Build stage
FROM node:20-alpine as builder

WORKDIR /app

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Build the app
COPY . .
RUN yarn build

# Production stage
FROM node:20-alpine

WORKDIR /app

# Install production dependencies
COPY package.json yarn.lock server.js ./
RUN yarn install --production --frozen-lockfile

# Copy built assets
COPY --from=builder /app/dist ./dist

# Expose the port the app runs on
EXPOSE 3000

# Start the app
CMD ["node", "server.js"]