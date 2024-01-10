package main

import (
	"crud-api/src/routes"
)

func main() {
	port := "8080"
	routes.StartServer(port)
}
