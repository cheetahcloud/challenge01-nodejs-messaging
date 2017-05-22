FROM php:7.0-apache
WORKDIR /var/www/nodejs/
RUN apt-get update && apt-get install -y nodejs npm
RUN apt-get install -y rabbitmq-server
RUN rabbitmq-plugins enable rabbitmq_management
COPY mini-challenge-display/ /var/www/html/
COPY mini-challenge-nodejs/ /var/www/nodejs/
COPY config/ /etc/rabbitmq/
RUN npm install
ENTRYPOINT sh /etc/rabbitmq/first-start.sh
EXPOSE 80 3030 15672 5672
#CMD ["apache2-foreground"]
#CMD ["/etc/init.d/apache2", "start", "&&", "nodejs", "app.js"]
#CMD ["", "app.js"]