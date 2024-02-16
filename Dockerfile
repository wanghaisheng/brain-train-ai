# Stage 1: Building the app
FROM node:21-alpine as builder

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma

RUN npm install

# Generate Prisma client
RUN npx prisma generate

COPY . .

# Build your Next.js app
RUN npm run build

# Stage 2: Run the app
FROM node:21-alpine

WORKDIR /app

# Copy the build output and necessary files from the builder stage
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/prisma ./prisma

# Expose the port Next.js runs on
EXPOSE 3000

CMD ["npm", "start"]