FROM node:21.6.1

WORKDIR  /app

COPY pascage*.json ./

RUN yarn add \
    @nestjs/common@^10.0.0 \
    @nestjs/config@^3.2.1 \
    @nestjs/core@^10.0.0 \
    @nestjs/jwt@^10.2.0 \
    @nestjs/platform-express@^10.0.0 \
    @nestjs/sequelize@^10.0.1 \
    @nestjs/serve-static@^4.0.2 \
    @nestjs/swagger@^7.3.1 \
    bcryptjs@^2.4.3 \
    class-transformer@^0.5.1 \
    class-validator@^0.14.1 \
    cross@^1.0.0 \
    env@^0.0.2 \
    pg@^8.11.3 \
    pg-hstore@^2.3.4 \
    reflect-metadata@^0.2.0 \
    rxjs@^7.8.1 \
    sequelize@^6.37.1 \
    sequelize-typescript@^2.1.6 \
    swagger-ui-express@^5.0.0 \
    uuid@^9.0.1

COPY . .

COPY ./dist ./dist

CMD ["yarn", "start:dev"]