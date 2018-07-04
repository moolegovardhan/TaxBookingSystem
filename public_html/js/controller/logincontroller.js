var c = angular.module("CtrlModule", ["FactModule"]);
 
    
c.run(function($rootScope){
     $rootScope.loadingImage = false;
      $rootScope.invalidialogShown = false;
    $rootScope.status = "";
   
});

c.controller("LoginController", function($scope, $state, LoginFactory){

    $scope.doLogin = function(){
      
         var userInfo = LoginFactory.getUserDetails(); 
         
                 $state.go("taxi.agentregistration");

         }; 
 });
