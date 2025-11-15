package router

import (
	"net/http"

	"bduckdotdev/internal/http/handlers"
	"bduckdotdev/pkg/logger"

	"github.com/go-chi/chi/v5"
)

func New() *chi.Mux {
	r := chi.NewRouter()
	log := logger.NewDebugJsonSlogLogger()

	r.Get("/", handlers.Create(log, handlers.HomeHandler))
	r.Get("/projects", handlers.Create(log, handlers.ProjectsHandler))
	r.Get("/blog", handlers.Create(log, handlers.BlogHandler))
	r.Get("/{dir}/{slug}", handlers.Create(log, handlers.PostHandler))
	r.Get("/about", handlers.Create(log, handlers.AboutHandler))
	r.Get("/resume", handlers.Create(log, handlers.ResumeHandler))
	r.Get("/healthz", handlers.Create(log, handlers.HealthCheckHandler))

	r.Handle("/public/*", http.StripPrefix("/public/", http.FileServer(http.Dir("./public"))))

	return r
}
