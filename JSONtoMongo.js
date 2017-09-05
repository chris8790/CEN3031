'use strict';
/*
  Import modules/files you may need to correctly run the script.
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema'),
    config = require('./config');

/* Connect to your database */
mongoose.connect(config.db.uri);

/*
  Instantiate a mongoose model for each listing object in the JSON file,
  and then save it to your Mongo database
 */
var listings = require('./listings.json').entries;
for(var i=0; i<listings.length; i++) {

  /* Retrieve current entry from JSON */
  var entry = Listing(listings[i]);

  /* Save current entry to database */
  entry.save(function(err) {
    if(err) throw err;
    console.log('Entry added!');
  });
}
