'use strict';

/**
 * @ngdoc service
 * @name limStoreApp.ShareService
 * @description
 * # ShareService
 * Service in the limStoreApp.
 */
angular.module('limStoreApp')
  .service('ShareService', function () {
    this.navigationLinks = ['Home', 'Catalog', 'About us', 'Contacts'];
    this.mapLinks = {
      'Home' : '/',
      'Catalog' : 'catalog',
      'About us' : 'about',
      'Contacts' : 'contacts'
    };
    this.getMapReverse = function(name){
      for(var key in this.mapLinks){
        if(this.mapLinks[key] === name){
          return key;
        }
      }
    }

    this._shareData = null;
    this.setShareData = function(data){
      this._shareData = data;
    };

    this.getShareData = function(){
      return this._shareData;
    }
  });
