'use strict';  

var _ = require('underscore');
var solr = require("solr-client");
var solrClient;

function SolrService(){
	solrClient = solr.createClient({
        host : 'localhost',
        port : '8983',
        core : 'venue',
        path : '/solr'});
}

SolrService.prototype.search = function(q, callback){
    var query = solrClient.createQuery()
            .q(q)
            .dismax()
            .qf({name : 1.0 })
            .mm(2)                  
            .start(0).rows(10);

    solrClient.search(query, function(err, obj){
        callback(err, obj);
    });
}

module.exports = SolrService;