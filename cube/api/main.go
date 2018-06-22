package main // import "github.com/juliens/demo"

import (
	"net/http"
	"encoding/json"
	"fmt"
	"io"
	"crypto/rand"
	"encoding/base64"
	"os"
)

var sessions = make(map[string]int)

func SessionId() string {
	b := make([]byte, 32)
	if _, err := io.ReadFull(rand.Reader, b); err != nil {
		return ""
	}
	return base64.URLEncoding.EncodeToString(b)
}

type Article struct {
	Name string
	Image string
	Description string
}

func main() {
	http.HandleFunc("/api/server",http.HandlerFunc(func(rw http.ResponseWriter, req *http.Request) {
		rw.Write([]byte(os.Getenv("HOSTNAME")))
	}))
	http.HandleFunc("/api/add",http.HandlerFunc(func(rw http.ResponseWriter, req *http.Request) {
		sessionCookie, err := req.Cookie("MY_SESSION")
		if err !=nil || sessionCookie.Value == "" {
			sessionId := SessionId()
			sessionCookie = &http.Cookie{Name: "MY_SESSION", Value: sessionId}
			http.SetCookie(rw, sessionCookie)
		}
		rw.WriteHeader(200)

		if _, ok := sessions[sessionCookie.Value]; ok {
			sessions[sessionCookie.Value]++
		} else {
			sessions[sessionCookie.Value] = 1
		}
		fmt.Fprint(rw, sessions[sessionCookie.Value])

	}))

	http.HandleFunc("/api/get",http.HandlerFunc(func(rw http.ResponseWriter, req *http.Request) {
		sessionCookie, err := req.Cookie("MY_SESSION")
		if err !=nil || sessionCookie.Value == "" {
			sessionId := SessionId()
			sessionCookie = &http.Cookie{Name: "MY_SESSION", Value: sessionId}
			http.SetCookie(rw, sessionCookie)
		}
		rw.WriteHeader(200)

		if _, ok := sessions[sessionCookie.Value]; ok {
		} else {
			sessions[sessionCookie.Value] = 0
		}
		fmt.Fprint(rw, sessions[sessionCookie.Value])

	}))

	http.HandleFunc("/api/articles",http.HandlerFunc(func(rw http.ResponseWriter, req *http.Request) {
		articles := []Article{
			Article{
				"Cube 2x2 Moyu",
				"2-2-moyu.jpg",
				"Start your journey into cube with a seemingly simple cube",
		    },
		    Article {
			     "Gan 360 UM 3x3",
			     "360-um-gan.jpg",
				 "If you think you deserve the best cube, then this is your cube of choice",
			},
			Article{
				"Moyu GTS 2M 3x3",
				"3-3-gts-moyu.jpg",
				"One of the greatest option for cubers on a budget that want the best",
			},
			Article {
				"Moyu AoSu 4x4",
				"4-4-aosu.jpg",
				"Ready to tackle bigger cube? This is your first stop.",
			},
		}

		//encoder := json.NewEncoder(rw)
		//encoder.Encode(articles)
		json, err := json.Marshal(articles)
		if err != nil {
			rw.WriteHeader(500)
			fmt.Fprint(rw, err)
		}
		rw.Header().Set("Content-Type", "application/json")
		rw.WriteHeader(200)

		fmt.Fprint(rw, string(json))
	}))
	http.ListenAndServe(":80", nil)
}
