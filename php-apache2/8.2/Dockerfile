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
    php8.2  \
    php8.2-cli  \
    php8.2-common \
    php8.2-bcmath \
    php8.2-cli \
    php8.2-curl \
    php8.2-intl \
    php8.2-imagick \
    php8.2-gd \
    php8.2-mbstring \
    php8.2-mysql \
    php8.2-sqlite3 \
    php8.2-opcache \
    php8.2-ssh2 \
    php8.2-xml \
    php8.2-zip \
    php8.2-xdebug


ADD php.config.ini /etc/php/8.2/mods-available/php.config.ini
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
