YUI.add('grid-view', function (Y) {

Y.GridView = Y.Base.create('gridView', Y.View, [], {
	
	events: {
		'li': {click: 'selected'}
	},

	initializer: function (config) {
		console.log('initializing gridView');
        var pages = this.get('modelList');
		console.log(pages);
    },

	render: function (){
		console.log("rendering grid");
		var container = this.get('container'),
			pages = this.get('modelList'),
			anim = new Y.Anim({
				node: container,
			        to: {
			            height: 0,
			            width: 0
			        }
			}),
			expandTimer,
			width = 0,
			height= 0 ;
				
		//container.setStyle('height', height+"px");	
		//container.setStyle('width', width+"px");
		//container.setStyle('backgroundColor', "black");
		
		container.setContent(function(){
			var html = '';
			pages.each(function(item){
				html += "<li><a href='ghandi'>"+item.get("title")+"</a></li>";
			});
			return html;
		}());
		//anim.run();
	},
	
	selected: function(){
		console.log("holla");
		//this.navigate('/photo/' + 'ficl' + '/');
	}
   
});

}, '0.0.1', {
    requires: [ 'handlebars'
              , 'node-style'
              , 'node-screen'
              , 'pages'
              , 'view'
			  , 'anim'
              ]
});
