FROM nginx:1.17.8-alpine

ADD vhost.conf /etc/nginx/conf.d/default.conf

COPY public /var/www/public