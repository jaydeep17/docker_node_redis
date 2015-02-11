FROM node:0.10

RUN mkdir /src

RUN ls

WORKDIR /src

RUN npm install nodemon -g

ADD package.json /src/package.json

RUN npm install

RUN ls

EXPOSE 3000

CMD ["nodemon", "-L" ,"app.js"]