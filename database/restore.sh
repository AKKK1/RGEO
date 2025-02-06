#!/usr/bin/env bash

mongorestore --db ${MONGO_DATABASE} --username ${MONGO_INITDB_ROOT_USERNAME} --password ${MONGO_INITDB_ROOT_PASSWORD} --authenticationDatabase admin --drop /backup/dump/${MONGO_DATABASE}
echo "Finished restoring '${MONGO_DATABASE}' database."
