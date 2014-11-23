/**
 * Created by michaelzhao007 on 11/17/2014.
 */
'use strict';

angular.module('loginModule', ['ngRoute','ngCookies'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'login/view/login.html'
        });
    }])

    .config(['$httpProvider',function($httpProvider){
        $httpProvider.interceptors.push('TokenInterceptor');
    }]);


