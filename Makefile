BUILDER=./.builder
RULES=gatsby
include $(BUILDER)/rules.mk
$(BUILDER)/rules.mk:
	-go run github.com/endobit/builder@latest init

.PHONY: serve
serve: ## dynamically serve the site
	$(MAKE) gatsby-serve
