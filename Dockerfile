FROM node:alpine
LABEL author="Luis"

WORKDIR /app
COPY ./package.json .

RUN npm i
COPY . .

EXPOSE 80
ENTRYPOINT ["node", "index.js"]


