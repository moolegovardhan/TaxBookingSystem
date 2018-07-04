var vehicle = angular.module("DriverMapCtrlModule", ["DriverMapFactModule"]);
 
    
vehicle.run(function($rootScope){
     $rootScope.loadingImage = false;
      $rootScope.invalidialogShown = false;
    $rootScope.status = "";
   
});


vehicle.controller("drivermapcontroller", function($scope, $state, drivermapFactory,$rootScope){
    $scope.newschool = {};
$scope.loadingImage = true;

drivermapFactory.fetchdrivers().then(function(data){
           console.log(data);
           if(data.data.responseMessageDetails.status === "Success"){
                 $scope.loadingImage = false;
                $scope.drivers = data.data.responseMessageDetails.data;

           }else{
               $scope.confirmationMessage = "Error : "+data.data;
                 $scope.loadingImage = false;
                $scope.invalidialogShown = true;
           }
         });

 drivermapFactory.fetchvehicleTypes().then(function(data){
           console.log(data);
           if(data.data.responseMessageDetails.status === "Success"){
                 $scope.loadingImage = false;
                $scope.vehicletypes = data.data.responseMessageDetails.data;

           }else{
               $scope.confirmationMessage = "Error : "+data.data;
                 $scope.loadingImage = false;
                $scope.invalidialogShown = true;
           }
         });
   $scope.mapDriver = function(){
      var arrList =  $scope.vehicletype.split(",");
          $scope.vehicletypeid = arrList[0];
          $scope.vehicletype = arrList[1];
          
          var arrList1 =  $scope.driver.split(",");
          $scope.driverid = arrList[0];
          $scope.drivername = arrList[1];
          
            var dataToPass = {               
                "drivername": $scope.vehicletype,
                "vehicletype": $scope.drivername,
                "vehiclenumber": $scope.vehiclenumber,
                
            };
                console.log(dataToPass);
        $scope.Alldrivers.push(dataToPass);
       console.log(angular.toJson($scope.Alldrivers));
       $scope.driver=$scope.Alldrivers;

      };
    
    $scope.submitDriverToCar = function () {
         
          
        var dataToPass = {
            officeid: $rootScope.userObj.officeid,               
            status:"Y",
            createdby: $rootScope.userObj.officeid,
            driver:$scope.driver             
        };
    console.log(angular.toJson(dataToPass));
      drivermapFactory.mappingDriver(dataToPass).then(function(data){
          console.log(data); 
        if(data.data.responseMessageDetails.status === "Success"){
                $scope.loadingImage = false; 
                $scope.status = "Driver Mapped Succesfully";
                $scope.showModal2 = !$scope.showModal2;
                $state.go("taxi.drivermapping"); 
           }else{
                $scope.confirmationMessage = "Error : "+data.data;
                $scope.loadingImage = false;
                $scope.invalidialogShown = true;
           }
        
         });
         };
});

