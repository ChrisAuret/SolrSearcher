'use strict';

//http://stackoverflow.com/questions/20534702/node-js-use-of-module-exports-as-a-constructor

// Export a named function
exports.getDateTime = function (){
	var date = new Date();

	var hour = date.getHours();
	hour = (hour < 10 ? "0" : "") + hour;

	var min  = date.getMinutes();
	min = (min < 10 ? "0" : "") + min;

	var sec  = date.getSeconds();
	sec = (sec < 10 ? "0" : "") + sec;

	return hour + ":" + min + ":" + sec;
}; 

/*
	If you want the root of your module's export to be a function (such as a constructor) 
	or if you want to export a complete object in one assignment instead of building it one property at a time,
	 assign it to module.exports instead of exports.
*/
// Export an anonymous function
/*module.exports = function(){
	return{
		getDateTime : function(){
			var date = new Date();

			var hour = date.getHours();
			hour = (hour < 10 ? "0" : "") + hour;

			var min  = date.getMinutes();
			min = (min < 10 ? "0" : "") + min;

			var sec  = date.getSeconds();
			sec = (sec < 10 ? "0" : "") + sec;

			return hour + ":" + min + ":" + sec;
		}
	}
}*/

// Export a constructor function
/*
function DateTimeUtiliy(){

}

DateTimeUtiliy.prototype.getDateTime = function(){
			var date = new Date();

			var hour = date.getHours();
			hour = (hour < 10 ? "0" : "") + hour;

			var min  = date.getMinutes();
			min = (min < 10 ? "0" : "") + min;

			var sec  = date.getSeconds();
			sec = (sec < 10 ? "0" : "") + sec;

			return hour + ":" + min + ":" + sec;
}
module.exports = DateTimeUtiliy;

// Usage:
var DTU = require( './dateTimeUtility.js' );
var dtu = new DTU();
dtu.getDateTime();*/