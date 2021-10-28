FROM ubuntu:20.04
COPY ./server ./App
WORKDIR ./App

RUN apt-get update
RUN apt-get install -y nodejs
RUN apt-get install npm -y
RUN npm install

EXPOSE 1234

CMD nodejs index.js