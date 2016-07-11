'use strict';

angular.module('fullStackTemplate')
.controller('profileController', function($state, $scope, Auth, dbProfile, dbUsers, dbWatchlist, Stock){
  console.log('profileCtrl');

  $scope.users = dbUsers;
  $scope.profile = dbProfile.data;
  $scope.watchlist = dbWatchlist;

  $scope.getQuote = symbol => {
    Stock.getQuote(symbol)
    .then(res=> $scope.quote = res.data)
    .catch(err=> $scope.quote = err);
  };


});
