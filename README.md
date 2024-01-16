# Teste de Proficiência


Breve implementação de uma api CREATE e POST, utilizando JavaScript e Golang backend e React para frontend.

## Pré-requisitos

- Node.js (versão v18.18.0)
- Go (versão 1.21.5)

## Configuração

1. Clone o repositório:

   ```bash
   git clone https://github.com/Samuel-AMS/Avaliacao-de-Proficiencia.git
   ```
2. Configure o backend (NodeJs):
    ```bash
    cd node
    npm install
    ```
- a) Configure o backend (Golang):
    ```bash
    cd go
    go mod download
    ```
3. Configure o frontend (React):
    ```bash
    cd gui
    npm install
    ```
## Executando o Projeto
1. Inicie o servidor de desenvolvimento do frontend (React):
    ```bash
    cd gui
    npm start
    ```
    *Servidor será executado em http://localhost:3000*

2. Inicie o servidor GO backend:
    ```bash
    cd go
    go run main.go
    ```
    *Servidor será executado em http://localhost:3333*
3. Inicie o servidor Node backend:
    ```bash
    cd node
    npm start
    ```
    *Servidor será executado em http://localhost:4000*