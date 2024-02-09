FROM node:18-alpine
ENV NODE_ENV=production
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --only=production
COPY . .
RUN npm run build
EXPOSE 8787
CMD [ "npm", "run", "preview" ]