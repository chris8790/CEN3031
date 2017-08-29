angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = $scope.listings[0];
    $scope.newEntry = undefined;

    $scope.addListing = function() {
      $scope.newEntry.code = $scope.newEntry.code.toUpperCase();
      $scope.listings.push($scope.newEntry);
      $scope.newEntry = undefined;
    };

    $scope.addListingReset = function() {
      $scope.newEntry = undefined;
    }
    
    $scope.deleteListing = function(index) {
      $scope.listings.splice(index, 1);
    };

    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
    };
  }
]);