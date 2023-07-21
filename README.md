# Docker Containers
Docker Containers


#### Get the php.ini files
```
wget https://raw.githubusercontent.com/php/php-src/PHP-7.0/php.ini-development
wget https://raw.githubusercontent.com/php/php-src/PHP-7.0/php.ini-production

wget https://raw.githubusercontent.com/php/php-src/PHP-7.4/php.ini-development
wget https://raw.githubusercontent.com/php/php-src/PHP-7.4/php.ini-production
```

```shell
# check php version
docker run -it  -t php:7.1 php -v | grep PHP|Xdebug
docker run -it  -t php:7.2 php -v | grep PHP
docker run -it  -t php:7.3 php -v | grep PHP
docker run -it  -t php:7.4 php -v | grep PHP
docker run -it  -t php:8.0 php -v | grep PHP
docker run -it  -t php:8.1 php -v | grep PHP
docker run -it  -t php:8.2 php -v | grep PHP

# debug one container
docker build -f Dockerfile_7.1 . -t php:7.1 
```
