FROM node:alpine
WORKDIR '/usr/frontend'
COPY ./package.json ./
COPY ./package-lock.json ./
COPY ./yarn.lock ./
RUN npm install
COPY ./src ./src
COPY ./public ./public

CMD ["npm", "start"]
