resume:
	pandoc -s --pdf-engine=xelatex ./content/resume.md -o ./public/brennan-duck.pdf

build: 
	templ generate
	npx @tailwindcss/cli -i ./public/input.css -o ./public/styles.css 
	go build -o ./bin/main ./cmd/api/main.go

.PHONY: build resume
