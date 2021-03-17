FROM node:15.9.0


WORKDIR /usr/

RUN npm install --save graphql
COPY package.json .
RUN npm install


COPY . .
EXPOSE 4000


CMD ["npm", "start"]