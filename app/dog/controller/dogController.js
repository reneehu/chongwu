/**
 * Created by michaelzhao007 on 11/18/2014.
 */
angular.module('dogModule').controller('dogController',function($scope,$http,dogFactory) {
    $scope.getDogList = function(){
        dogFactory.getDogs().then(function(data){
              $scope.dogList  = data.responseBody;
        });
        };
    $scope.getDogList();


});