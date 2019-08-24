
NANOC = nanoc3-1.8

default: build

build:
	$(NANOC) compile

install: build
	cp -aR output/* /Library/WebServer/Documents/ 

clean:
	rm -rf output tmp
