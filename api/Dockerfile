FROM node:16-alpine
RUN apk update
RUN apk upgrade
RUN npm i -g @nestjs/cli
RUN npm i class-transformer class-validator
RUN npm i prisma @prisma/client
WORKDIR /api