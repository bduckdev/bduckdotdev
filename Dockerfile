FROM golang:1.25.4-bookworm AS build

WORKDIR /app

RUN apt-get update && \
    apt-get install -y nodejs npm && \
    rm -rf /var/lib/apt/lists/*

RUN go install "github.com/a-h/templ/cmd/templ@latest"


COPY go.mod go.sum ./
RUN go mod download

COPY package.json package-lock.json* ./
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

COPY . .

RUN npx @tailwindcss/cli -i ./public/input.css -o ./public/styles.css --minify
RUN templ generate
RUN go build -o /app/bin/main ./cmd/api/main.go

FROM gcr.io/distroless/base-debian12

WORKDIR /app

COPY --from=build /app/bin/main ./main
COPY --from=build /app/public ./public
COPY --from=build /app/content ./content

EXPOSE 3000

CMD ["./main"]
