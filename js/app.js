YUI.add('pagebuilder', function (Y) {

Y.PageBuilder = Y.Base.create('pagebuilder', Y.App, [], {

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
		var pages = this.get('pages');
		
		pages.load(function(err, data){
			console.log(data.item(0).get("title"));
		});
		console.log(pages);

		this.showView('grid', {modelList: pages}, function (gridView) {
			console.log('calling reset!');
            //gridView.reset();
        });
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
		'pagebuilder-pages',
		'pagebuilder-page'
	]
});