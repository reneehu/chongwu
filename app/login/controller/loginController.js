/**
 * Created by michaelzhao007 on 11/17/2014.
 */
/**
 * Created by michaelzhao007 on 11/17/2014.
 */
angular.module('loginModule').controller('loginController',function($scope,$http,loginFactory,$cookieStore,$location) {
    $scope.loginUser = function(user){
         loginFactory.login(user).then(function(event) {
             if (event.data.status == "200") {
                 $cookieStore.put('token', event.data.responseBody.token);
                 $cookieStore.put('uerLoginStatus', true);
             }
             else {
                 $scope.message = "You username or password is wrong!";
             }
         });

    };


});

