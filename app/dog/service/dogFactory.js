/**
 * Created by michaelzhao007 on 11/18/2014.
 */
/**
 * Created by michaelzhao007 on 11/17/2014.
 */
angular.module('dogModule').factory('dogFactory',function($http, $q) {
    var baseurl = 'http://localhost:8090/chong/rest/';
    return {
        getDogs: function(){
            return $http.get(baseurl+'dog/list.json').then(function(result){
                return result.data;
            });
        }
    }
});
