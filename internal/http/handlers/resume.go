package handlers

import (
	"net/http"

	"bduckdotdev/internal/content"
	"bduckdotdev/internal/views/resume"

	"github.com/a-h/templ"
)

func ResumeHandler(w http.ResponseWriter, r *http.Request) error {
	data := content.LoadPost("", "resume.md")
	component := templ.Raw(data.Content)
	return resume.Page(component).Render(r.Context(), w)
}
