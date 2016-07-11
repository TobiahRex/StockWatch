'use strict';
angular.module('fullStackTemplate')
.controller('loginController', function($scope, $state, Auth, $auth){
  console.log('loginCtrl');

  $scope.loginUser = loginObj => {
    $auth.login(loginObj)
    .then(res => {
      $scope.$emit('loggedIn');
    })
    .catch(err=> {
      console.log('err: ', err);
    })
  }

  $scope.authenticate = provider => {
    $auth.authenticate(provider)
    .then(res => {
      $scope.$emit('loggedIn');
      $state.go('profile');
    })
    .catch(err=> {
      console.log("error: ", err);
      $state.go('login');
    });
  };

});
