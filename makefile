default: install generate

install:
	npm install

generate:
	npx prisma generate

dev:
	npm run dev

build:
	npm run build

start:
	npm run start

lint:
	npm run lint

.PHONY: default install dev build lint start test
