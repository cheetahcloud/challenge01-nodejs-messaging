FROM php:7.0-apache
WORKDIR /var/www/nodejs/
RUN apt-get update && apt-get install -y nodejs npm
COPY mini-challenge-display/ /var/www/html/
COPY mini-challenge-nodejs/ /var/www/nodejs/
RUN npm install
ENTRYPOINT sh tmp.sh
#CMD ["apache2-foreground"]
#CMD ["/etc/init.d/apache2", "start", "&&", "nodejs", "app.js"]
#CMD ["", "app.js"]