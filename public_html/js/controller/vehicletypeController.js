var agent = angular.module("VehicleTypeCtrlModule", ["VehicleTypeFactModule"]);
 
    
agent.run(function($rootScope){
     $rootScope.loadingImage = false;
      $rootScope.invalidialogShown = false;
    $rootScope.status = "";
   
});


agent.controller("vehicletypecontroller", function($scope, $state, vehicletypeFactory,$rootScope){
   
$scope.loadingImage = true;

      $scope.addvehicle = [];
      
       $scope.addvehicle = function(){
      
            var dataToPass = {               
                "vehicletype": $scope.vehicletype,
                "description": $scope.description                
            };
                console.log(dataToPass);
        $scope.vehicles.push(dataToPass);
       console.log(angular.toJson($scope.vehicles));
       $scope.vehicle=$scope.vehicles;

      };
      
    $scope.cancelvehicle = function (vehicle) {
        $scope.vehicle.splice(vehicle, 1);
    };
    
    $scope.SubmitVehicle = function () {
        var dataToPass = {
            officeid: $rootScope.userObj.officeid,               
            status:"Y",
            createdby: $rootScope.userObj.officeid,
            vehicle: $scope.vehicle
        };
    console.log(angular.toJson(dataToPass));
      vehicletypeFactory.addingvehicle(dataToPass).then(function(data){
          console.log(data); 
        if(data.data.responseMessageDetails.status === "Success"){
                $scope.loadingImage = false; 
                $scope.status = "Vehicle Type Added Succesfully";
                $scope.showModal2 = !$scope.showModal2;
                $state.go("taxi.vehicletyperegistration"); 
           }else{
                $scope.confirmationMessage = "Error : "+data.data;
                $scope.loadingImage = false;
                $scope.invalidialogShown = true;
           }
           
         });
         };
});

