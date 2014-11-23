/**
 * Created by michaelzhao007 on 11/18/2014.
 */
angular.module('dogModule', ['ngRoute','ngCookies'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'dog/view/listDog.html'
        });
    }])


