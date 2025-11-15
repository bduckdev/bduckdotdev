package handlers

import "net/http"

func HealthCheckHandler(w http.ResponseWriter, r *http.Request) error {
	w.Header().Set("content-type", "text/plain; charset=utf-8")
	w.WriteHeader(http.StatusOK)
	_, err := w.Write([]byte("ok"))
	return err
}
