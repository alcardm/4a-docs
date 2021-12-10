# FROM node:lts-alpine

# ENV NODE_ENV=production

# RUN npm install -g http-server
# WORKDIR /app
# COPY package*.json ./
# RUN npm install --production
# COPY . .
# # RUN npm run build
# RUN npm run

# EXPOSE 8080
# CMD [ "http-server", "dist" ]


FROM node:lts-alpine

WORKDIR /app
COPY . .
RUN yarn install
# RUN yarn build
EXPOSE 8080
CMD ["yarn", "serve"]