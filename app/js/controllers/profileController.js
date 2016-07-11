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

  let getWatchlist = id => {
    Stock.getWL(id)
    .then(res=> $scope.watchlist = res.data)
    .catch(res => $scope.watchlist = err);
  };


  $scope.account = dbProfile.data;
  $scope.profile = dbProfile.data;


  $scope.getQuote = symbol => {
    $scope.quoteSearch = true;
    Stock.getQuote(symbol)
    .then(res=> $scope.quote = res.data)
    .catch(err=> $scope.quote = err);
  };

  $scope.addToWL = quoteObj => {
    $scope.quoteSearch = false;
    Stock.addToWL(quoteObj, $stateParams.id)
    .then(res=> {getProfile(); getWatchlist($stateParams.id)}
    .catch(err=> console.log('error: ', err));
  };

  $scope.updateWL = () => {
    Stock.updateWL($stateParams.id)
    .then(res=> $scope.watchlist = res.data)
    .catch(res=>$scope.watchlist = err);
  };

  $scop.dumpWL = () => {
    Stock.removeWL($stateParams.id)
    .then(res=> $scope.watchlist = res.data)
    .catch(err=> $scope.watchlist = err);
  };

  $scope.removeOne = () => {
    Stock.removeQuote(quoteObj, $stateParams.id);
    .then(res=> $scope.watchlist = res.data)
    .catch(err=> $scope.watchlist = err);
  };

});
