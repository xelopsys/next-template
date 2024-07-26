# Set base container
FROM node:20-alpine as base


RUN apk add --no-cache libtool automake autoconf nasm build-base


# Dependencies stage
FROM base AS deps


WORKDIR /app
COPY package*.json ./
COPY yarn.lock ./


RUN yarn install

# Build stage
FROM base AS builder
ARG ENV_FILE=.env.dev



WORKDIR /app
COPY . .

COPY ./$ENV_FILE .env



COPY --from=deps /app/node_modules ./node_modules
RUN yarn build



# Run stage
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production

COPY --from=builder /app/.env ./.env


COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/tailwind.config.ts ./tailwind.config.ts
COPY --from=builder /app/postcss.config.js ./postcss.config.js

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

RUN chown -R nextjs:nodejs /app/.next
USER nextjs

EXPOSE 3000

CMD ["yarn", "start"]