package handlers

import (
	"net/http"

	"bduckdotdev/internal/views/home"
)

func HomeHandler(w http.ResponseWriter, r *http.Request) error {
	return home.Page().Render(r.Context(), w)
}
