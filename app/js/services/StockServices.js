'use strict';

angular.module('fullStackTemplate')
.service('Stock', function($http){

  this.getQuote = symbol => $http.post('/api/stocks', {symbol});

});
