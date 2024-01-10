package handlers

import (
	"crud-api/src/models"
	"database/sql"
	"encoding/json"
	"net/http"
	"time"
)

type TB01Controller struct {
	db *sql.DB
}

func NewTB01Controller(db *sql.DB) *TB01Controller {
	return &TB01Controller{db: db}
}

func (c *TB01Controller) Create(w http.ResponseWriter, r *http.Request) {
	// Verificar se o método de requisição é do tipo POST
	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	//Decodificando JSON recebido
	var data models.Data
	err := json.NewDecoder(r.Body).Decode(&data)
	if err != nil {
		http.Error(w, "Bad request!", http.StatusBadRequest)
		return
	}

	data.ColDt = time.Now().Format("2006-01-02T15:04:05.000Z")

	query := "INSERT INTO tb01 (col_texto, col_dt) VALUES ($1, $2)"
	_, err = c.db.Exec(query, data.ColText, data.ColDt)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusOK)
	w.Write([]byte("Data inserted successfully!"))
}
