const config = require("./src/data/config");

module.exports = {
	siteMetadata: {
		title: config.defaultTitle,
		description: config.defaultDescription,
		author: config.author,
	},
	plugins: [
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-styled-components",
		{
			resolve: `gatsby-plugin-canonical-urls`,
			options: {
				siteUrl: config.url,
			},
		},
		{
			resolve: "gatsby-plugin-nprogress",
			options: {
				color: config.themeColor,
				showSpinner: false,
			},
		},
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				name: config.defaultTitle,
				short_name: "Portfolio",
				start_url: "/",
				background_color: config.backgroundColor,
				theme_color: config.themeColor,
				display: "minimal-ui",
				icon: "./static/favicon/favicon-512.png",
			},
		},
		"gatsby-plugin-offline",
	],
};
