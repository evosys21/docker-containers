# Base docker image
FROM debian:buster-slim
LABEL maintainer=andy@interpid.eu
DESCRIPTION="PHP 7.1"


RUN echo 'debconf debconf/frontend select Noninteractive' | debconf-set-selections

RUN apt-get update && \
    apt-get install -yqq apt-transport-https ca-certificates curl software-properties-common gnupg \
    git unzip zip wget

RUN curl -fsSL https://packages.sury.org/php/apt.gpg | apt-key add -
RUN add-apt-repository "deb https://packages.sury.org/php/ $(lsb_release -cs) main"

#install php
RUN apt-get update && \
    apt install -y  \
    php7.1  \
    php7.1-cli  \
    php7.1-common \
    php7.1-bcmath \
    php7.1-cli \
    php7.1-curl \
    php7.1-intl \
    php7.1-imagick \
    php7.1-gd \
    php7.1-mbstring \
    php7.1-mysql \
    php7.1-sqlite \
    php7.1-opcache \
    php7.1-json \
    php7.1-xml \
    php7.1-zip \
    php7.1-xdebug

#install composer
RUN curl -sS https://getcomposer.org/installer -o composer-setup.php
RUN php composer-setup.php --install-dir=/usr/local/bin --filename=composer

#install debugging tools - to be reviewed/removed!
RUN apt-get install -y procps

CMD ["/bin/bash"]
