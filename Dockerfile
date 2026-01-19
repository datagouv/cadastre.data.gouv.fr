# Build stage
FROM node:22-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
# RUN npm i -g yarn

RUN yarn --only=production && yarn cache clean

# Copy source code
COPY . .

RUN yarn build

# Production stage
FROM node:22-bookworm-slim AS production

# Create app directory
WORKDIR /app

# Create non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy built application from builder stage
COPY --from=builder --chown=nextjs:nodejs /app /app

# Switch to non-root user
USER nextjs

# Expose port
EXPOSE 3000

# Add health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000', (res) => { process.exit(res.statusCode === 200 ? 0 : 1) })"

ENV NODE_ENV=production
ENV PORT=3000
# Start the application
CMD ["node", "server"]
