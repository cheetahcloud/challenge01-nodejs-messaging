/etc/init.d/rabbitmq-server start &&
nodejs app.js > stdout.txt 2> stderr.txt &
apache2-foreground