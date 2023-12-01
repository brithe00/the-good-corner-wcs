FROM node:lts-alpine

RUN mkdir /app
WORKDIR /app

COPY tsconfig.json tsconfig.json

COPY package.json package.json
RUN npm i

COPY src src

CMD npm start