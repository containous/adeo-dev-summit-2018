package main // import "github.com/juliens/demo"

import "net/http"

func main() {
	http.ListenAndServe(":80", http.FileServer(http.Dir("/static")))

	//http.ListenAndServe(":80", http.FileServer(&assetfs.AssetFS{Asset: genstatic.Asset, AssetInfo: genstatic.AssetInfo, AssetDir: genstatic.AssetDir, Prefix: "static"}))
}
