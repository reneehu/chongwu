/**
 * Created by michaelzhao007 on 11/17/2014.
 */
/**
 * Created by michaelzhao007 on 11/17/2014.
 */
angular.module('loginModule').controller('loginController',function($scope,$http,loginFactory,$cookieStore,$location) {
    $scope.signinFlag = $cookieStore.get('uerLoginStatus');
    $scope.loginUser = function(user){
         loginFactory.login(user).then(function(event) {
             if (event.data.status == "200") {
                 $cookieStore.put('token', event.data.responseBody.token);
                 $cookieStore.put('uerLoginStatus', true);
                 $scope.signinFlag = true;
             }
             else {
                 $scope.message = "You username or password is wrong!";
             }
         });

    };

    $scope.logout = function() {
        $cookieStore.remove("token");
        $cookieStore.remove("uerLoginStatus");
        $scope.signinFlag = false;
    };


});

