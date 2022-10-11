FROM nginx:alpine

RUN rm /etc/nginx/conf.d/default.conf && rm -rf /docker-entrypoint.d && rm /usr/share/nginx/html/index.html
COPY nginx.conf /etc/nginx/conf.d/default.conf
RUN apk add nodejs-current npm

WORKDIR /app
COPY . .

RUN npm install && RUN npm run build
EXPOSE 80

CMD nginx ; exec npm start
