'use strict';

/**
 * @ngdoc function
 * @name limStoreApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the limStoreApp
 */
angular.module('limStoreApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.navigationLink = 'About us';
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
