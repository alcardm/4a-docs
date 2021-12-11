FROM node:lts-alpine

ENV NODE_ENV=production

RUN npm install -g http-server
RUN npm install -g @vue/cli
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
RUN npm run build
# RUN npm run

EXPOSE 8080
CMD [ "http-server", "dist" ]