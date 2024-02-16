FROM node:20.11.0-alpine3.19
WORKDIR /app/
COPY package*.json /app/
RUN npm install
COPY . .
EXPOSE 5173

CMD ["npm", "run", "build"]