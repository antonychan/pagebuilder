YUI.add('pagebuilder', function (Y) {

Y.RichMediaPortal = Y.Base.create('pagebuilder', Y.App, [], {

	templates: {
		//grid: Y.Handlebars.compile(Y.one('#grid-template').getContent())
		//standard: Y.Handlebars.compile(Y.one('#standard-attribute-template').getContent())
	},
	
	views: {
        grid: {
            type    : Y.GridView,
            preserve: true
        }
    },
	
	initializer: function() {	
		this.dispatch();
	},
	
	handleIndex: function(){
	
	}

}, {
	ATTRS: {
        page: {value: new Y.Page},
		pages: {value: new Y.Pages},
		routes: {
			value: [
				{path: '*', callback: 'handleIndex'}
			]
		}
	}
});

}, '0.0.1', {
	requires: [
		'app-base',
		'handlebars',
		'pages',
		'page'
	]
});