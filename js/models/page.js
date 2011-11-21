YUI.add('pagebuilder-page', function (Y) {

var Lang = Y.Lang;

Y.Page = Y.Base.create('pagebuilder-page', Y.Model, [], {
	
}, {
	ATTRS: {
		name: {},
		description: {},
		
	}
});

}, '0.0.1', {
	requires: [
		'model',
		'cache-offline'
	]
});