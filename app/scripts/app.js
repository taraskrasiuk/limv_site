'use strict';

/**
 * @ngdoc overview
 * @name limStoreApp
 * @description
 * # limStoreApp
 *
 * Main module of the application.
 */
angular
  .module('limStoreApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/catalog', {
        templateUrl: 'views/catalog.html',
        controller : 'catalogController',
        controllerAs: 'catalogCtrl'
      })
      .when('/kitchens/:id',{
        templateUrl : 'views/components/kitchen.html',
        controller : 'kitchenController',
        controllerAs : 'kitchenCtrl'
      })
      .when('/contacts',{
        templateUrl : 'views/contacts.html',
        controller : 'contactsController',
        controllerAs : 'contacts'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
