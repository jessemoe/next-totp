package handler

import (
	"database/sql"
	"os"

	_ "github.com/go-sql-driver/mysql"
)

func GetDB() (*sql.DB, error) {
	database := os.Getenv("DATABASE")
	db, err := sql.Open("mysql", database)
	if err != nil {
		return nil, err
	}
	return db, nil
}
