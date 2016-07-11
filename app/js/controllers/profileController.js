'use strict';

angular.module('fullStackTemplate')
.controller('profileController', function($state, $stateParams, $scope, Auth, dbProfile, dbUsers, Stock){
  console.log('profileCtrl');
  $scope.quoteSearch = false;

  let getProfile = () => {
    Auth.getProfile()
    .then(res=> $scope.profile = res.data)
    .catch(err=> $scope.profile = err);
  };


  $scope.account = dbProfile.data;
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
    .then(res=> getProfile())
    .catch(err=> console.log('error: ', err));
  };

  // Stock.removeQuote(quoteObj, $stateParams.id);
  // Stock.updateWL($stateParams.id)
  // Stock.removeWL($stateParams.id)

});
