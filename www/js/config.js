/*global require*/
(function() {
'use strict';

  var isTest = window.location.href.match('/test/');

  require.config({
   deps: [ isTest ? '../../test/config' : 'main' ],
    
    paths: {
      jquery : '../lib/jquery/jquery',
      underscore : '../lib/lodash/lodash',
      backbone : '../lib/backbone/backbone',
      handelbars : '..lib/handelbars/handelbars',
      foundation : '../lib/foundation/js/foundation/foundation',
      "foundation.reveal" : '../lib/foundation/js/foundation/foundation.reveal',
      text : '../lib/require/text',
      templates : '../templates',
      typeahead: '../lib/typeahead/typeahead.jquery',
      bloodhound: '../lib/typeahead/bloodhound.min',
    },

    shim: {
      "underscore" : { 
        exports: '_' 
      },
      "backbone": {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
      },
      "foundation" : { 
        deps: ["jquery"] 
      },
      "foundation.reveal": ['foundation']
    }
  });
  
  require(['app'], function(App){ App.initialize(); });

}());