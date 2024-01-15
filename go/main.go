package main

import (
	"crud-api/src/routes"
)

func main() {
	port := "3333"
	routes.StartServer(port)
}
