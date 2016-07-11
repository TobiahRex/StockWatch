'use strict';

angular.module('fullStackTemplate')
.controller('profileController', function($state, $stateParams, $scope, Auth, dbProfile, dbUsers, Stock){
  console.log('profileCtrl');
  $scope.quoteSearch = false;

  $scope.users = dbUsers;
  $scope.profile = dbProfile.data;
  // $scope.watchlist = dbWatchlist;

  $scope.getQuote = symbol => {
    $scope.quoteSearch = true;
    Stock.getQuote(symbol)
    .then(res=> $scope.quote = res.data)
    .catch(err=> $scope.quote = err);
  };


  $scope.addToWL = quoteObj => {
    $scope.quoteSearch = false;
    Stock.addToWL(quoteObj, $stateParams.id)
    .then(res=> console.log('awesome: ', res.data))
    .catch(err=> console.log('error: ', err));
  };

});
