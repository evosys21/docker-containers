while ($true) {
    docker exec -it php-nginx-php-nginx-1 bash -c '/etc/init.d/apache2 reload'
    # Wait for one second
    Start-Sleep -Seconds 1
}
