define(['jquery', 'underscore', 'backbone'], function(){

  var AppRouter = Backbone.Router.extend({
    // Hash maps for routes
    routes: {
      "help":                 "help",    // #help
      "search/:query":        "search",  // #search/kiwis
      "search/:query/p:page": "search",   // #search/kiwis/p7
      "*error" : "fourofour"
    },

    help: function() {
      
    },

    search: function(query, page) {
      
    },

    fourofour: function(){
      // 404 page
    }

  });

  var initialize = function(){
    Backbone.history.start();
  };

  return{
    initialize : initialize
  };

})