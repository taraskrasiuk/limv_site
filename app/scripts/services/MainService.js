'use strict';

/**
 * @ngdoc service
 * @name limStoreApp.MainService
 * @description
 * # MainService
 * Service in the limStoreApp.
 */
angular.module('limStoreApp')
  .factory('MainService', ['ApiService',function (ApiService) {

    function MainService(props){
      this.props = props;
    }

    MainService.prototype.getByType = function(type){
      return this.props[type];
    };

    MainService.prototype.getById = function (id, type) {
      var currentModelType = this.getByType(type);
      var findItem = {};
        for (var key in currentModelType) {
          currentModelType[key].filter(function (item) {
            if(item.id === id){
              findItem = item;
            }
          })[0];
        }
      return findItem;
    };

    MainService.prototype.setUrlForImage = function(type,name,image){
      return type + name + '/'+ image;
    }

    return MainService;


  }]);
