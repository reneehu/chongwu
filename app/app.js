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
.config(['$httpProvider','$routeProvider',function($httpProvider,$routeProvider){
    $httpProvider.interceptors.push('TokenInterceptor');
        $routeProvider.when('/listDog', {
            templateUrl: 'dog/view/listDog.html'
        }).when('/login', {
            templateUrl: 'login/view/login.html'
        });
}]);

angular.module('loginModule', ['ngRoute','ngCookies']);
angular.module('dogModule', ['ngRoute','ngCookies'])


