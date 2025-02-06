# ---------#
#   Main   #
# ---------#

.PHONY:
start:
	docker compose up -d

.PHONY:
stop:
	docker compose stop

.PHONY:
down:
	docker compose down
	docker volume rm rgeo_next
	docker volume rm rgeo_node_modules

.PHONY:
build:
	docker compose build

.PHONY:
logs:
	docker compose logs -f

.PHONY:
reload: stop down build start
setup: stop down build start db-restore


# -----------------#
#   Shell access   #
# -----------------#

.PHONY:
shell:
	docker exec -it riot-app bash

.PHONY:
mongo-shell:
	docker exec -it riot-mongo bash

.PHONY:
db-dump:
	docker exec -it -u 1000:1000 riot-mongo bash -c '/backup/generate.sh'

.PHONY:
db-restore:
	docker exec -it -u 1000:1000 riot-mongo bash -c '/backup/restore.sh'
