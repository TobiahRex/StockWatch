'use strict';

angular.module('fullStackTemplate')
.controller('addPhotoModalController', function ($scope, $uibModalInstance, Photo) {
  console.log('addPhotoModalCtrl');

  $scope.createPhoto = () => {
    console.log('$scope.photo: ', $scope.photo);
    $uibModalInstance.close($scope.photo);
  };

  $scope.cancel = () => {
    $uibModalInstance.dismiss();
  };
});
