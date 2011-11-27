YUI.add('pagebuilder-pages', function (Y) {

var Lang = Y.Lang

Y.Pages = Y.Base.create('pagebuilder-pages', Y.ModelList, [], {

    model: Y.Page,
    cache: new Y.CacheOffline(),

	sync: function (action, options, callback) {
		var data = [],
			self = this;
		
		if(action === "read"){
			var returnData = [];
			
			this.getPages(function(data){
				Y.Array.each(data, function(item, index, array){
					self.add(item);
					//returnData.push(item);
				});
				callback(null, self);
			});
			
		}
		else {
			callback('Unsupported sync action: ' + action);
		}
	},
	
	getPages: function (cb) {
		var pages = [],
			randomPages = ["Contact", "Info", "Projects"];
			
		Y.Array.each(randomPages, function(item, index, array){
			var page = new Y.Page({title: item});
			pages.push(page);
		});
		
		cb(pages);
	}
  

});

}, '0.0.1', {
    requires: [ 'cache-offline'
              , 'model-list'
              , 'pagebuilder-page'
              ]
});
