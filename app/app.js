'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'loginModule',
  'dogModule'
])
.config(['$httpProvider',function($httpProvider){
    $httpProvider.interceptors.push('TokenInterceptor');
}]);
