FROM node:18.12.1-alpine3.17 AS builder
RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /app

RUN yarn global add turbo
COPY . .
RUN turbo prune --scope=@s-com/loan-calculator-service --docker


# Add lockfile and package.json's of isolated subworkspace
FROM node:18.12.1-alpine3.17 AS installer
RUN apk add --no-cache libc6-compat curl
RUN apk update
WORKDIR /app

# First install the dependencies (as they change less often)
COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/yarn.lock ./yarn.lock

RUN yarn install --frozen-lockfile

# Build the project
COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json
RUN yarn turbo run build --filter=loan-calculator-service...


FROM node:18.12.1-alpine3.17 AS runner
RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /app

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nestjs
USER nestjs

COPY --chown=nestjs:nodejs --from=installer /app/services/loan-calculator-service/dist ./dist
COPY --chown=nestjs:nodejs --from=installer /app/services/loan-calculator-service/node_modules ./dist/node_modules
COPY --chown=nestjs:nodejs --from=installer /app/packages/types/dist ./dist/node_modules/@s-com/types
COPY --chown=nestjs:nodejs --from=installer /app/node_modules ./node_modules

ENV NODE_ENV production
CMD [ "node", "dist/main.js" ]
