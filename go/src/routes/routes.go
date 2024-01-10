package routes

import (
	"crud-api/src/config"
	"crud-api/src/handlers"
	"database/sql"
	"log"
	"net/http"
)

type Router struct {
	tb01Controller *handlers.TB01Controller
}

func NewRouter(db *sql.DB) *Router {
	tb01Controller := handlers.NewTB01Controller(db)
	return &Router{
		tb01Controller: tb01Controller,
	}
}

func (r *Router) SetupRoutes() {
	http.HandleFunc("/tb01", r.tb01Controller.Create)
}

func StartServer(port string) {
	db, err := config.NewDB()
	if err != nil {
		log.Fatal(err)
	}

	router := NewRouter(db)
	router.SetupRoutes()

	log.Printf("Server listening on port %s", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}