FROM debian:bullseye-slim
LABEL maintainer=andy@interpid.eu

RUN echo 'debconf debconf/frontend select Noninteractive' | debconf-set-selections

RUN apt update && \
    apt install -yqq apt-transport-https ca-certificates curl software-properties-common gnupg \
    apache2 apache2-utils git unzip zip wget mc

RUN curl -fsSL https://packages.sury.org/php/apt.gpg | apt-key add -
RUN add-apt-repository "deb https://packages.sury.org/php/ $(lsb_release -cs) main"

RUN apt clean

EXPOSE 80
STOPSIGNAL SIGQUIT
# https://httpd.apache.org/docs/2.4/stopping.html#gracefulstop
STOPSIGNAL SIGWINCH

CMD ["apache2ctl", "-D", "FOREGROUND"]
