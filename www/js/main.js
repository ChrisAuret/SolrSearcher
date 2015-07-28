define(['jquery', 'underscore', 'backbone', 'views/searchView', 'foundation.reveal' ], function( $, _, Backbone, SearchView ) {
  $(function() {

    var searchView = new SearchView();

    $(document).foundation();

    console.log("App is running...");
  });
});