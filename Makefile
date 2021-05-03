lint:  ;@echo "Linting....."; \
	./node_modules/.bin/eslint . --fix

run: ;@echo "Starting....."; \
	npm start

install: ;@echo "Installing....."; \
	npm install

build: ;@echo "Installing....."; \
	npm run build

test: ;@echo "Installing....."; \
	npm run cypress

clean : ;
	rm -rf node_modules