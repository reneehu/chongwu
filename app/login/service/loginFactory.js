/**
 * Created by michaelzhao007 on 11/17/2014.
 */
angular.module('loginModule').factory('loginFactory',function($http, $q) {
   var baseurl = 'http://localhost:8090/chong/rest/';
   return {
     login: function(user){
         return $http.post(baseurl+'login.json',user).then(function(result){
             return result.data
         });
     }
   }
});
