FROM node:18-alpine

RUN mkdir -p /home/node/app
WORKDIR /home/node/app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "dev", "--", "--host"]