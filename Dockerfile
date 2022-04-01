FROM node:16-alpine3.12
WORKDIR /phantom/fe
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3001:3001
CMD ["node", "src/server.js"]