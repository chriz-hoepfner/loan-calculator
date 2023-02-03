FROM node:18.12.1-alpine3.17 AS builder
RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /app

RUN yarn global add turbo
COPY . .
RUN turbo prune --scope=@s-com/loan-calculator-client --docker


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

ARG NEXT_PUBLIC_API_HOST

RUN yarn turbo run build --filter=@s-com/loan-calculator-client...


FROM node:18.12.1-alpine3.17 AS runner
WORKDIR /app

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=installer /app/clients/loan-calculator-client/next.config.js .
COPY --from=installer /app/clients/loan-calculator-client/package.json .

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=installer --chown=nextjs:nodejs /app/clients/loan-calculator-client/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/clients/loan-calculator-client/public/ ./clients/loan-calculator-client/public
COPY --from=installer --chown=nextjs:nodejs /app/clients/loan-calculator-client/.next/static ./clients/loan-calculator-client/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/node_modules ./node_modules

ENV NODE_ENV production
CMD ["node", "clients/loan-calculator-client/server.js"]