FROM php:7.4.2-fpm

RUN apt-get update && apt-get install -y \
    libmcrypt-dev default-mysql-client libzip-dev \
    libmagickwand-dev --no-install-recommends \
    && docker-php-ext-install pdo_mysql \
    && pecl install mcrypt zip \
    && docker-php-ext-enable mcrypt zip

RUN chown -R www-data:www-data /var/www/ && chmod -R 755 /var/www