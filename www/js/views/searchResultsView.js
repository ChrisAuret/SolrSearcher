define([ 
	'jquery',
	'underscore',
	'backbone',
	'text!templates/searchResultsView.tmpl' ], 
	function( $, _, Backbone, SearchResultsView ){
		var SearchResultsView = Backbone.View.extend({
			
			el: $("#"),

			initialize : function(){

			},
			render : function(){

			},
			initTypeahead : function(){

			}
		});

		return SearchResultsView;
	});