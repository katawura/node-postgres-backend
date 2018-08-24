let protocol = process.env.NODE_ENV == 'test' ? 'https://' : 'http://';

module.exports = {
	defaultImg: req => {
		return protocol + req.headers.host + '/assets/defaultProfile.png';
	},
	defaultBrandImg: req => {
		return protocol + req.headers.host + '/assets/defaultBrand.png';
	}
};
