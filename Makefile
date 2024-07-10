BUILDER=./.builder
RULES=gatsby
include $(BUILDER)/rules.mk

$(BUILDER)/rules.mk:
	-go run github.com/endobit/builder@latest init

.PHONY: serve
serve: ## dynamically serve the site
	$(MAKE) gatsby-serve

export PRIVATE_ADDRESS_STREET="4881 Academy Street"
export PRIVATE_ADDRESS_STATE="San Diego, CA"
export PRIVATE_ADDRESS_ZIPCODE="92109"
export PRIVATE_PHONE="+1.619.200.6923"
