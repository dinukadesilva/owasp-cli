var ClientApi = require('./clientapi');
var clientapi = new ClientApi(this.config);

function Spider(config) {
	this.config = config;
}

Spider.prototype.scan = function scan() {
	var parasms = {
	};

	return clientapi.callApi(params);
};

Spider.prototype.status = function status() {
	var params = {
	};

	return clientapi.callApi(params);
};

module.exports = Spider;