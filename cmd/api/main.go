package main

import (
	"log"
	"net/http"
	"os"

	"bduckdotdev/internal/http/router"

	"github.com/joho/godotenv"
)

func main() {
	r := router.New()
	godotenv.Load()

	port := os.Getenv("PORT")
	if port == "" {
		port = "3000"
	}
	log.Printf("Listening on port: %s", port)

	http.ListenAndServe(":"+port, r)
}
