'use strict';

var express   = require( 'express' );
var DTU       = require( './dateTimeUtility.js' );
var SolrService = require( './solrService.js' );
var app       = express(  );
var baseDir   = __dirname + '/../';
app.use( '/', express.static( baseDir + 'www' ) );

app.get( '/search', function(req, res) {
    var q = req.query.q; // search term
	console.log(DTU.getDateTime() + " Searching for '%s'...", q);
    
    var solr = new SolrService();
    var results = solr.search(q, function(err, obj){
        if(err){
            console.log("You got errors mate: %s", err);
        }
        if(obj){
            console.log("You got %s results mate:", obj.response.numFound);
            console.log(obj.response.docs);
            res.setHeader('Content-Type', 'application/json');
            var venuesJSON = JSON.stringify({ venues: obj.response.docs });
            console.log(obj.response.docs);
            res.send(JSON.stringify(obj.response.docs));
        }
    });
});

app.listen( 4000 );
console.log( 'Serving on http://localhost:4000' );