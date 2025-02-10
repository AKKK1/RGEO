#!/usr/bin/env bash

# Variables
REMOTE_DATABASE_NAME="test"

# Generate dump from remote server
mongodump --uri=${MONGODB_URI} --out=/backup
echo "Finished generating remote database dump."

# Restore dump to localhost
mongorestore --db ${MONGO_DATABASE} \
    --username ${MONGO_INITDB_ROOT_USERNAME} \
    --password ${MONGO_INITDB_ROOT_PASSWORD} \
    --authenticationDatabase admin \
    --drop /backup/${REMOTE_DATABASE_NAME}
echo "Database loaded to local server."

# Remove the dump files
rm -rf /backup/${REMOTE_DATABASE_NAME}
