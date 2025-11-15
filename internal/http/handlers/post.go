package handlers

import (
	"net/http"

	"bduckdotdev/internal/content"
	"bduckdotdev/internal/views/post"

	"github.com/a-h/templ"
	"github.com/go-chi/chi/v5"
)

func PostHandler(w http.ResponseWriter, r *http.Request) error {
	dir := chi.URLParam(r, "dir")
	slug := chi.URLParam(r, "slug")

	posts := content.LoadPosts(dir)
	var current content.Post

	for _, post := range posts {
		if post.Slug == slug {
			current = post
		}
	}

	content := templ.Raw(current.Content)
	return post.Page(current.Meta, content).Render(r.Context(), w)
}
