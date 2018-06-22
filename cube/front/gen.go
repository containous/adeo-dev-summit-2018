//go:generate rm -vf autogen/genstatic/gen.go
//go:generate go-bindata -pkg genstatic -o autogen/genstatic/gen.go ./static/...

package main
