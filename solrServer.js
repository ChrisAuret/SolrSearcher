/*
	Standalone node process.
	include solrclient aggregate
	
	Queries the solr index.
*/

'use strict';

var net = require('net');
var events = require('events');
var subscribers = 0;

var solr = require('./solrClient.js');
console.log(solr);


var server = net.createServer(function(connection){
	//events.EventsEmitter.call(this);
	// reporting
	console.log("Subscriber connected");
	subscribers += 1;
	console.log("Total connections: " + subscribers);

	console.log(solr);

	connection.on('close', function(){
		console.log("subscriber disconnected");
		subscribers -= 1;
		console.log("Total connections: " + subscribers);
	})
});

server.listen(5432, function(){
	console.log("Listening for subscribers");
});
