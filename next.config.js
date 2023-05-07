/** @type {import('next').NextConfig} */

const withVideos = require("next-videos");

module.exports = withVideos({
	basePath: "",

	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});

		return config;
	},
});
