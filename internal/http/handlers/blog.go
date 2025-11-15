package handlers

import (
	"net/http"

	"bduckdotdev/internal/content"
	"bduckdotdev/internal/views/blog"
)

func BlogHandler(w http.ResponseWriter, r *http.Request) error {
	data := content.LoadPosts("blog")
	return blog.Page(data).Render(r.Context(), w)
}
