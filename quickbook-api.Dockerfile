FROM node:19.4.0-alpine

WORKDIR /app

COPY ./mf-quick-book/MF_Server .

RUN npm ci

CMD ["node", "index.js"]