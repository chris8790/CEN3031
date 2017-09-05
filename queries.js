'use strict';

/* Necessary includes to run functions below */
var mongoose = require('mongoose'),
    Listing = require('./ListingSchema'),
    config = require('./config');

/* Connect to database */
mongoose.connect(config.db.uri);

/*
  Find the document that contains data corresponding to Library West,
  then log it to the console.
 */
var findLibraryWest = function() {
  Listing.findOne({name: 'Library West'}, function(err, entry) {
    if(err) throw err;

    if(!entry) {
      /* Entry does not exist */
      console.log('Entry with name "Library West" does not exist');
    }
    else {
      /* Entry exists */
      console.log(entry);
    }
  });
};

/*
  Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed
  on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
  and remove this listing from your database and log the document to the console.
 */
var removeCable = function() {
  Listing.findOne({code: 'CABL'}, function(err, entry) {
    if(err) throw err;

    if(!entry) {
      /* Entry does not exist */
      console.log('Entry with code "CABL" does not exist');
    }
    else {
      /* Entry exists and will be deleted */
      console.log('Trying to delete the following entry:');
      console.log(entry);
      entry.remove(function(err) {
        if(err) throw err;
        console.log('Entry successfully deleted!');
      });
    }
  });
};

/*
  Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then
  log the updated document to the console.
 */
var updatePhelpsMemorial = function() {
  Listing.findOne({name: 'Phelps Laboratory'}, function(err, entry) {
    if(err) throw err;

    if(!entry) {
      /* Entry does not exist */
      console.log('Entry with name "Phelps Laboratory" does not exist');
    }
    else {
      /* Entry exists and will be updated */
      entry.address = '1953 Museum Rd, Gainesville, FL 32611, United States';
      entry.save(function(err) {
        if(err) throw err;
        console.log('Entry successfully updated!');
      });
      console.log('The updated entry is:');
      console.log(entry);
    }
  });
};

/*
  Retrieve all listings in the database, and log them to the console.
 */
var retrieveAllListings = function() {
  Listing.find({}, function(err, entry) {
    if(err) throw err;
    console.log(entry);
  });
};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();
