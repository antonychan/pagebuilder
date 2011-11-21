(function () {

var filter = (window.location.search.match(/[?&]filter=([^&]+)/) || [])[1] || 'min';

// YUI Config.
YUI_config = {
	/* Sorry Eric, just until 3.5.0 gets released with app-base! */
	comboBase  : 'http://yui.ericf.me/?',
	//comboBase  : 'http://yui.antonychan.net/phploader/phploader/combo.php?3.4.1',
    root       : '/',
    filter     : filter,
    combine    : true,
    allowRollup: false,
    gallery    : 'gallery-2011.10.20-23-28',
    groups     : {
        app: {
            base     : 'js/',
            //comboBase: 'js/?',
            combine  : false,
            root     : '',
            modules  : {
				'featureModel': {
					path    : 'models/feature.js',
					requires: [
						'model',
						'cache-offline'					]
				},
				'featuresModelList': {
					path    : 'models/features.js',
					requires: [
						'model-list',
						'cache-offline',
						'featureModel'
					]
				},
				'formatModel': {
                    path    : 'models/format.js',
                    requires: [ 'model',
								'cache-offline'
                              ]
                },
				'formatsList': {
					path    : 'models/formats.js',
					requires: [
						'model-list',
						'cache-offline',
						'formatModel'
					]
				},
				'grid-view': {
                    path    : 'views/grid.js',
                    requires: [ 'handlebars'
                              , 'node-style'
                              , 'node-screen'
                              , 'formats'
                              , 'view'
                              ]
                },
				'pagebuilder': {
                    path    : '/app.js',
                    requires: [ 'app-base',
								'handlebars',
								'pagebuilder-model',
								'pagebuilder-list',
								'grid-view'
                              ]
                }
            }
        }
    }
};

}());