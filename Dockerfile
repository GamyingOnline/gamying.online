FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build

FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

# Copy the build files
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 5000

CMD ["yarn", "start"]
