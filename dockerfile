FROM node:18 AS builder

WORKDIR /dozn-task

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

RUN npm run build

CMD ["npm","run","dev"]