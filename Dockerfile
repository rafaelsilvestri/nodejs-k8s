FROM node:10

WORKDIR /usr/srv/app

COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 9000

CMD [ "node", "./bin/server.js" ]
