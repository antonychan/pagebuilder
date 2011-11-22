YUI.add('grid-view', function (Y) {

Y.GridView = Y.Base.create('gridView', Y.View, [], {

	initializer: function (config) {
		console.log('initializing gridView');
        var pages = this.get('modelList');
		console.log(pages);
    },

	render: function (){
		console.log("rendering grid");
		var container = this.get('container'),
			pages = this.get('modelList');		
		
		container.setContent(function(){
			var html = '';
			pages.each(function(item){
				html += "<li>"+item.get("title")+"</li>";
			});
		
			return html;
		}());
	}
   
});

}, '0.0.1', {
    requires: [ 'handlebars'
              , 'node-style'
              , 'node-screen'
              , 'pages'
              , 'view'
              ]
});
