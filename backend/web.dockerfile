FROM nginx:1.17.8

ADD vhost.conf /etc/nginx/conf.d/default.conf