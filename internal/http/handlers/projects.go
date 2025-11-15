package handlers

import (
	"net/http"

	"bduckdotdev/internal/content"
	"bduckdotdev/internal/views/projects"
)

func ProjectsHandler(w http.ResponseWriter, r *http.Request) error {
	posts := content.LoadPosts("projects")
	return projects.Page(posts).Render(r.Context(), w)
}
