# Base docker image
FROM debian:buster-slim
LABEL maintainer=andy@interpid.eu

RUN echo 'debconf debconf/frontend select Noninteractive' | debconf-set-selections

RUN apt-get update && \
    apt-get install -yqq apt-transport-https ca-certificates curl software-properties-common gnupg \
    git unzip zip wget

RUN curl -fsSL https://packages.sury.org/php/apt.gpg | apt-key add -
RUN add-apt-repository "deb https://packages.sury.org/php/ $(lsb_release -cs) main"

#install php
RUN apt-get update && \
    apt -y install \
    php7.3-common \
    php7.3-bcmath \
    php7.3-cli \
    php7.3-curl \
    php7.3-intl \
    php7.3-imagick \
    php7.3-gd \
    php7.3-mbstring \
    php7.3-mysql \
    php7.3-sqlite \
    php7.3-opcache \
    php7.3-json \
    php7.3-xml \
    php7.3-zip \
    php-xdebug

#install composer
RUN curl -sS https://getcomposer.org/installer -o composer-setup.php
RUN php composer-setup.php --install-dir=/usr/local/bin --filename=composer

#install debugging tools - to be reviewed/removed!
RUN apt-get install -y procps

CMD ["/bin/bash"]
