FROM node:lts-alpine

RUN mkdir /app
WORKDIR /app

COPY package*.json ./
RUN npm i

COPY public public
COPY .eslintrc.json .eslintrc.json
COPY next-env.d.ts next-env.d.ts
COPY next.config.js next.config.js
COPY tsconfig.json tsconfig.json
COPY src src

CMD npm run dev