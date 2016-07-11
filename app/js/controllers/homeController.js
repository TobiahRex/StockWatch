'use strict';

angular.module('fullStackTemplate')
.controller('homeController', function($scope, $state, $uibModal, toastr, Stock){
  console.log('homeCtrl');
  $scope.activeStock = false;
  $scope.showSuccessMsg = () => toastr.success('Your information has been saved successfully!');
  $scope.showInfoMsg = () => toastr.info("You've got a new email!", 'Information');
  $scope.showErrorMsg = () => toastr.error("Your information hasn't been saved!", 'Error');
  $scope.showWarningMsg = () => toastr.warning('Your computer is about to explode!', 'Warning');


  $scope.getQuote = symbol =>{
    $scope.activeStock = true;
    Stock.getQuote(symbol)
    .then(res => $scope.quote = res.data)
    .catch(err => $scope.quote = err);
  };

});
