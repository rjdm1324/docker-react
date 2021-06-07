FROM node:10.14.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./ 

RUN npm install
RUN npm install react-scripts@3.0.1 -g
COPY . .

CMD ["npm","start"]
