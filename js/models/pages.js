YUI.add('pagebuilder-pages', function (Y) {

var Lang = Y.Lang

Y.Pages = Y.Base.create('pagebuilder-pages', Y.ModelList, [], {

    model: Y.FormatModel,
    cache: new Y.CacheOffline(),

	
  

});

}, '0.0.1', {
    requires: [ 'cache-offline'
              , 'model-list'
              , 'formatModel'
              ]
});
