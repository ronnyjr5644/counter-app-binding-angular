(function () {
'use strict';

angular.module('CounterApp', [])
.controller('CounterController', CounterController);

CounterController.$inject = ['$scope','$timeout'];
function CounterController($scope,$timeout) {
$scope.firstname="raunak";
//$scope.fullname="";

$scope.onceCounter=0;
$scope.counter=0;
$scope.upcounter=function(){
  $timeout(function(){
    $scope.counter++;
       console.log("Counter Incremented");
  },2000)
  
};
  $scope.showNumberOfWatchers = function () {
    console.log("# of watchers: ", $scope.$$watchersCount);
  };
  $scope.setfullname=function(){
    $scope.fullname=$scope.firstname+" "+"raj";
  };
  $scope.logfirstname=function(){
    console.log("first name is:",$scope.firstname);
  }
  $scope.logfullname=function(){
    console.log("full name is:",$scope.fullname);
  }
  $scope.countOnce=function(){
    $scope.onceCounter=1;
  };
  $scope.name="raunak"
  // $scope.upcounter=function(){
  //   setTimeout(function(){
  //     $scope.$apply(function(){
  //     $scope.counter++;
  //     console.log("Counter Incremented");
  //     });
  //     $scope.$digest();
  //   },2000)
    
  // };
  $scope.$watch(function(){
    console.log("Digest Loop Fired!");
  })
  // $scope.$watch('onceCounter',function(newval,oldval){
  //   console.log("onceCounter old value:",oldval);
  //   console.log("onceCounter new value:",newval);
  // });

  // $scope.$watch('counter',function(newval,oldval){
  //   console.log("counter old value:",oldval);
  //   console.log("Counter new value:",newval);
  // });

}

})();
