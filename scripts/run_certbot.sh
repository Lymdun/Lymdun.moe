#!/bin/bash

# cleanup exited docker containers
EXITED_CONTAINERS=$(docker ps -a | grep Exited | awk '{ print $1 }')
if [ -z "$EXITED_CONTAINERS" ]
then
        echo "No exited containers to clean"
else
        docker rm "$EXITED_CONTAINERS"
fi

docker-compose run --rm certbot renew
docker-compose exec web nginx -s reload