# Base docker image
FROM debian:bullseye-slim
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
    php7.4  \
    php7.4-cli  \
    php7.4-common \
    php7.4-bcmath \
    php7.4-cli \
    php7.4-curl \
    php7.4-intl \
    php7.4-imagick \
    php7.4-gd \
    php7.4-mbstring \
    php7.4-mysql \
    php7.4-sqlite3 \
    php7.4-opcache \
    php7.4-json \
    php7.4-ssh2 \
    php7.4-xml \
    php7.4-zip \
    php7.4-xdebug

#install composer
RUN curl -sS https://getcomposer.org/installer -o composer-setup.php
RUN php composer-setup.php --install-dir=/usr/local/bin --filename=composer

#install debugging tools - to be reviewed/removed!
RUN apt-get install -y procps

CMD ["/bin/bash"]
