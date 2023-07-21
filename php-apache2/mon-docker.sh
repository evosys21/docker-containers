while true
do
    docker exec -it php-nginx-php-nginx-1 bash -c '/etc/init.d/apache2 reload'
    sleep 1
done
