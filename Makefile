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
reload: stop down build start logs


# -----------------#
#   Shell access   #
# -----------------#

.PHONY:
shell:
	docker exec -it riot-app bash
