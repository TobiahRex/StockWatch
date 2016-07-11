'use strict';

angular.module('fullStackTemplate')
.service('Stock', function($http){

  this.getQuote = symbol => $http.post('/api/stocks', {symbol});

  this.addToWL = (quoteObj, id) => $http.post(`/api/users/${id}/`)

});
