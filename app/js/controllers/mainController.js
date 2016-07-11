'use strict';

angular.module('fullStackTemplate')
.controller('mainController', function($scope, $state, Auth, $stateParams){

  function loginCheck(){
    Auth.getProfile()
    .then(res => {
      $scope.currentUser = res.data;
      $state.go("profile", {id : res.data._id});
    })
    .catch(err => {
      $scope.currentUser = null;
      $state.go('login');
    });
  };

  loginCheck();

  $scope.$on('loggedIn', function(){loginCheck()});
  $scope.$on('loggedOut', function(){loginCheck()});

});
