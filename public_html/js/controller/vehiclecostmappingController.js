var vehicle = angular.module("VehicleCostMapCtrlModule", ["VehicleCostMapFactModule"]);
 
    
vehicle.run(function($rootScope){
     $rootScope.loadingImage = false;
      $rootScope.invalidialogShown = false;
    $rootScope.status = "";
   
});


vehicle.controller("vehiclecostmapcontroller", function($scope, $state, vehiclecostmapFactory,$rootScope){
    $scope.newschool = {};
$scope.loadingImage = true;

 vehiclecostmapFactory.fetchvehicleTypes().then(function(data){
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
   
    
    $scope.SubmitVehicleCost = function () {
         var arrList =  $scope.vehicletype.split(",");
          $scope.vehicletypeid = arrList[0];
          $scope.vehicletype = arrList[1];
        var dataToPass = {
            officeid: $rootScope.userObj.officeid,               
            status:"Y",
            createdby: $rootScope.userObj.officeid,
            vehicletype: $scope.vehicletype,
            vehicletypeid: $scope.vehicletypeid,
            units: $scope.units,  
            charge: $scope.charge                         
        };
    console.log(angular.toJson(dataToPass));
      vehiclecostmapFactory.mapVehicleCost(dataToPass).then(function(data){
          console.log(data); 
        if(data.data.responseMessageDetails.status === "Success"){
                $scope.loadingImage = false; 
                $scope.status = "Vehicle Cost Mapped Succesfully";
                $scope.showModal2 = !$scope.showModal2;
                $state.go("taxi.vehiclecostmapping"); 
           }else{
                $scope.confirmationMessage = "Error : "+data.data;
                $scope.loadingImage = false;
                $scope.invalidialogShown = true;
           }
        
         });
         };
});

