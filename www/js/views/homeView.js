define([' jquery', 'underscore', 'Backbone'],
	function( $, _, Backbone ){
		var HomeView = Backbone.View.extend({

			el: $("#search_container"),

			initialize : function(){
				this.render();
			},
			render : function(){
				var template = _.template( "" );

				this.$el.html( template );
			}

		});

		return HomeView;
	})