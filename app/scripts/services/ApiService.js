'use strict';

/**
 * @ngdoc service
 * @name limStoreApp.ApiService
 * @description
 * # MainService
 * Service in the limStoreApp.
 */
angular.module('limStoreApp')
  .service('ApiService', function ($http) {
    this.getData = function () {
      return $http.get('./data/data.json').success(function (response) {
           return response;
        })
        .error(function (e) {
          console.log(e)
        })
    };
  });
