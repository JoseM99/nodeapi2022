FROM node:16

WORKDIR /file

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm" , "start"]