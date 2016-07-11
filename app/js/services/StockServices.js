'use strict';

angular.module('fullStackTemplate')
.service('Stock', function($http){

  this.getQuote = symbol => $http.post('/api/stocks', {symbol});

  this.addToWL = (quoteObj, id) => $http.post(`/api/users/${id}/quote`, quoteObj);

  this.removeQuote = (quoteObj, id) => $http.post(`/api/users/${id}/quote`, quoteObj);
  
  this.updateWL = (quoteObj, id) => $http.post(`/api/users/${id}/quote`, quoteObj);

  this.removeWL = (quoteObj, id) => $http.post(`/api/users/${id}/quote`, quoteObj);


});
