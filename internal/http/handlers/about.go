package handlers

import (
	"net/http"

	"bduckdotdev/internal/views/about"
)

func AboutHandler(w http.ResponseWriter, r *http.Request) error {
	return about.Page().Render(r.Context(), w)
}
