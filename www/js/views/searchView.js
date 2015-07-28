define([ 
	'jquery',
	'underscore',
	'backbone',	
	'text!templates/searchView.tmpl',
	'typeahead',
	'bloodhound'
	], function( $, _, Backbone, SearchViewTmpl ){
	'use strict';

	var SearchView = Backbone.View.extend({
		el: $("#search_container"),

		initialize : function(){		
			this.render();
		},

		render : function(){	
			//var template = _.template( SearchViewTmpl );
			//this.$el.html( template );

			var venues = new Bloodhound({
			    datumTokenizer: Bloodhound.tokenizers.whitespace,
			    queryTokenizer: Bloodhound.tokenizers.whitespace,
			    remote: {
			        url: '/search?q=%QUERY',
			        wildcard: '%QUERY',
			        filter: function (venues) {
			        	console.log(venues);
			           // Map the remote source JSON array to a JavaScript array
			           return $.map(venues, function (venue) {
			                 return {
			                 	id: venue.id,
					            value: venue.name[0]
			                 };
			             });
			        }
			    }
			});

			venues.initialize();

			$(".typeahead").typeahead({
				hint: true,
				minlength: 1,
				highlight: true	
			},{
				displayKey: 'value',
				source: venues.ttAdapter()
			});
		},

		addEvents: function() {
        	var that = this;
    	},

		checkEnterPress: function(event) {
        	// Check Enter key press
        	if (event.which == 13 || event.keyCode == 13) {
            	console.log("Pressed Enter");
        	}
    	}
	});

	return SearchView;
});