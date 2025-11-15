package handlers

import (
	"net/http"

	"bduckdotdev/pkg/logger"
)

func Create(l logger.Logger, h func(w http.ResponseWriter, r *http.Request) error) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if err := h(w, r); err != nil {
			l.Error(r.Context(), "internal server error", "err", err, "path", r.URL.Path)
		}
	}
}
