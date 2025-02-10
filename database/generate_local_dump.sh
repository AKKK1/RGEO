#!/usr/bin/env bash

mongodump --db ${MONGO_DATABASE} \
    --username ${MONGO_INITDB_ROOT_USERNAME} \
    --password ${MONGO_INITDB_ROOT_PASSWORD} \
    --authenticationDatabase admin \
    -o /backup/local_dump

echo "Finished generating '${MONGO_DATABASE}' dump."
