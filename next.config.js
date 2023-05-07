/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
			test: /\.mp4$/,
			use: ["@mp4r/webpack"],
		});

		return config;
	},
};

module.exports = nextConfig;
