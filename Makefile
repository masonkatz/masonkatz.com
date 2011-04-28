
NANOC = nanoc3

default: build

build:
	$(NANOC) compile

clean:
	rm -rf output tmp