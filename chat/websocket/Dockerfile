FROM golang AS build
RUN go get github.com/containous/go-bindata/... \
&&  go get -u golang.org/x/vgo

COPY .  /go/src/github.com/juliens/demo

WORKDIR /go/src/github.com/juliens/demo

#RUN go generate
RUN CGO_ENABLED=0 GOOS=linux vgo build -a -installsuffix cgo -o main .


FROM scratch

EXPOSE 80
COPY --from=build  /go/src/github.com/juliens/demo/main /
CMD [ "/main" ]
