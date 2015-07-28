var VenueDetail = Backbone.View.extend({
	className: "venue-detail",
	events:{
		"click .icon" : "open"
	},
	initialize: function(){
		this.listenTo(this.model, "change", this.render);
	},
	render: function(){

	}
});