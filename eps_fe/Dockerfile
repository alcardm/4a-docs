FROM node:lts-alpine
RUN yarn install -g http-server
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
EXPOSE 8080
CMD ["yarn", "run", "serve"]