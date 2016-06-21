'use strict';

/**
 * @ngdoc function
 * @name limStoreApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the limStoreApp
 */
angular.module('limStoreApp')
  .controller('MainCtrl', ['$scope', 'ApiService', 'MainService', 'ShareService','$window', function ($scope, ApiService, MainService, ShareService,$window) {
    var self = this;
    $scope.mainNavigation = ShareService.navigationLinks;
    $scope.reverseMap = ShareService.getMapReverse;
    $scope.showCurrentLocation = function(){

    }
    $scope.navigationLink = $scope.activeLink='Home';
    $scope.switchNavLink = function(nav){
      $scope.activeLink = nav;
    }
    $scope.mapLink = ShareService.mapLinks;
    ApiService.getData().then(function (response) {
      ShareService.setShareData(new MainService(response.data));
      self.kitchensClass = ShareService.getShareData();
      self.kitchens = self.kitchensClass.getByType('kitchens');
    });

    $scope.mainImagesForSlider = [
      '/images/1.jpg',
      '/images/2.jpg',
      '/images/3.jpg'
    ];
    $scope.languages = [
       'RU', 'EN'
    ];
    $scope.languageSelected = 'RU';
    $scope.changeLanguage = function(lang){
      $scope.languageSelected = lang;
    }
  }])
  .controller('kitchenController', ['$scope', '$routeParams', 'MainService', 'ShareService', function ($scope, $routeParams, MainService, ShareService) {
    this.kitchenId = $routeParams.id;
    var TARGET_TYPE = 'kitchens';
    var Kitchens = ShareService.getShareData();
    $scope.kitchen = Kitchens.getById(Number(this.kitchenId), TARGET_TYPE);
    $scope.selectedImage = Kitchens.setUrlForImage('/kitchens/', $scope.kitchen.name, $scope.kitchen.images[0]);
    $scope.isCollapsed = false;

    this.changeImageUrl = function (nextImg) {
      $scope.selectedImage = Kitchens.setUrlForImage('/kitchens/', $scope.kitchen.name, nextImg);
    }
  }])
  .controller('catalogController', ['$scope','ShareService', function ($scope,ShareService) {
    $scope.navigationLink = 'Catalog';
    var TYPES = ['kitchens'];
    this.catalog = ShareService.getShareData();

    this.allTypes = TYPES;

    this.catalogByType = function (type) {
      return this.catalog.getByType(type);
    };

    this.checkType = function (type, id) {
      var currentType = catalog.getByType(type);
      for (var key in currentType) {
        var check = currentType[key].filter(function (item) {
          if (item.id == id) {
            return item;
          }
        })[0];
        return !!check.length;
      }
    }
  }])
  .controller('contactsController', ['$scope', function(){

  }])
