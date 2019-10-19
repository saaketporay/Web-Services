FROM node
EXPOSE 3000
WORKDIR /app

COPY . .

RUN npm install --production

CMD ["npm", "start"]

