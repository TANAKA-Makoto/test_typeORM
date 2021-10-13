#!/bin/bash

docker run --rm -d -p 53306:3306 --name typeORM_test \
	-eMARIADB_ROOT_PASSWORD=database \
	-eMARIADB_ROOT_HOST=localhost \
	-eMARIADB_DATABASE=typeormtest \
	-eMARIADB_USER=testuser \
	-eMARIADB_PASSWORD=testpass \
	-eTZ=Asia/Tokyo \
	-v $(pwd)/init_script:/docker-entrypoint-initdb.d \
	-v $(pwd)/conf_file:/etc/mysql/conf.d \
	mariadb/server:10.4
