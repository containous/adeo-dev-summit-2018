package main // import "github.com/juliens/demo"

import "fmt"
import (
	"net/http"
	"encoding/json"
)

func main() {
	http.ListenAndServe(":80", http.HandlerFunc(func(rw http.ResponseWriter, req *http.Request) {
		rw.Header().Set("Access-Control-Allow-Origin", "*")
		rw.Header().Set("Content-Type", "application/json")
		rw.WriteHeader(200)
		data := []string{"#dev", "#support", "#jokes", "#cubing", "#netflix"}
		dataJson, _ := json.Marshal(data)
		fmt.Fprintf(rw, string(dataJson))
	}))
}
