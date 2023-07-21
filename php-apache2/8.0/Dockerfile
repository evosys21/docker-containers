# Base docker image
FROM debian:bullseye-slim
LABEL maintainer=andy@interpid.eu

RUN echo 'debconf debconf/frontend select Noninteractive' | debconf-set-selections

RUN apt-get update && \
    apt-get install -yqq apt-transport-https ca-certificates curl software-properties-common gnupg \
    apache2 apache2-utils git unzip zip wget mc

RUN curl -fsSL https://packages.sury.org/php/apt.gpg | apt-key add -
RUN add-apt-repository "deb https://packages.sury.org/php/ $(lsb_release -cs) main"

##install php
RUN apt update && \
    apt -y install \
    php8.0  \
    php8.0-cli  \
    php8.0-common \
    php8.0-bcmath \
    php8.0-cli \
    php8.0-curl \
    php8.0-intl \
    php8.0-imagick \
    php8.0-gd \
    php8.0-mbstring \
    php8.0-mysql \
    php8.0-sqlite3 \
    php8.0-opcache \
    php8.0-ssh2 \
    php8.0-xml \
    php8.0-zip \
    php8.0-xdebug


ADD php.config.ini /etc/php/8.0/mods-available/php.config.ini
RUN phpenmod php.config

##install composer
#RUN curl -sS https://getcomposer.org/installer -o composer-setup.php
#RUN php composer-setup.php --install-dir=/usr/local/bin --filename=composer

#install debugging tools - to be reviewed/removed!
RUN apt install -y procps

# clean up
RUN apt clean


RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf

EXPOSE 80
STOPSIGNAL SIGQUIT
# https://httpd.apache.org/docs/2.4/stopping.html#gracefulstop
STOPSIGNAL SIGWINCH

CMD ["apache2ctl", "-D", "FOREGROUND"]
