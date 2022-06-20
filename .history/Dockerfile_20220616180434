FROM node:alpine
LABEL author="Luis"

WORKDIR /app
COPY ./package.json .

RUN npm i
RUN npm i pm2 -g
COPY . .

EXPOSE 80
ENTRYPOINT ["pm2-runtime", "index.js"]


