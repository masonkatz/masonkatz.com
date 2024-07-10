/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-env-variables',
      options: {
          allowList: [
	      'PRIVATE_ADDRESS_STREET',
	      'PRIVATE_ADDRESS_CITY',
	      'PRIVATE_ADDRESS_STATE',
	      'PRIVATE_ADDRESS_ZIPCODE',
	      'PRIVATE_PHONE',
	      'PRIVATE_EMAIL'
	  ],
      },
    },
    {
      resolve: `gatsby-transformer-yaml-plus`,
      options: {
        enableRemark: true,
        markdownPreface: 'md//',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/content/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-23092909-1',
      },
    },
  ],
}
