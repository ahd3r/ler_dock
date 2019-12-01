FROM node
WORKDIR /home/app
COPY ./package.json .
RUN npm i
COPY . .
CMD ["npm", "start"]
