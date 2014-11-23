/**
 * Created by michaelzhao007 on 11/17/2014.
 */
angular.module('loginModule').factory('loginFactory',function($http, $q) {
   var baseurl = 'http://localhost:8090/chong/rest/';
    var deferred = $q.defer();
   return {
     login: function(user){
         $http.post(baseurl+'login.json',user).then(function(data){
             deferred.resolve(data);
         });
         return deferred.promise;
     }
   }
});
