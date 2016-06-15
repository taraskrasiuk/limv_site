'use strict';

/**
 * @ngdoc directive
 * @name limStoreApp.directive:mainDirective
 * @description
 * # mainDirective
 */
angular.module('limStoreApp')
  .directive('headerComponent', function () {
    return {
      templateUrl: 'views/components/header-component.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

      }
    };
  })
  .directive('footerComponent', function(){
    return {
      templateUrl : 'views/components/footer-component.html',
      restrict: 'E',
      link : function(scope, el, attr){

      }
    }
  })
  .directive('slider', function(){
    return {
      templateUrl : 'views/components/main-slider.html',
      restrict: 'E',
     /* scope : {
        allSlides : '@slides'
      },*/
      link : function(scope, el ,attr){
      }
    }
  })
  .directive('furnitureList', function(){
    return {
      templateUrl : 'views/components/furniture-list.html',
      restrict: 'E',
      controller : 'MainCtrl',
      controllerAs : 'main',
      link : function(scope, el, attr){

      }
    }
  })
  .directive('navigatorBack', ['$window',function($window){
    return {
      templateUrl : 'views/components/navigator-backButton.html',
      restrict: 'E',
      link : function(scope,el,attr){
        el.on('click',function(){
          $window.history.back();
        })
      }
    }
  }])
