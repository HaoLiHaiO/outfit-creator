FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --production

RUN npm install -g typescript

RUN npm install --save-dev @types/react @types/react-dom

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "dev"]
