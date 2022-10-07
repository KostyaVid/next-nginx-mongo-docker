FROM nginx:alpine

RUN rm /etc/nginx/conf.d/default.conf
RUN rm -rf /docker-entrypoint.d
RUN rm /usr/share/nginx/html/index.html
COPY nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /app
RUN apk add nodejs-current npm
COPY . .

RUN npm install
RUN npm run build
EXPOSE 80

CMD nginx ; exec npm start