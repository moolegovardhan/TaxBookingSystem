var vehicle = angular.module("VehicleCtrlModule", ["VehicleFactModule"]);
 
    
vehicle.run(function($rootScope){
     $rootScope.loadingImage = false;
      $rootScope.invalidialogShown = false;
    $rootScope.status = "";
   
});


vehicle.controller("vehiclecontroller", function($scope, $state, vehicleFactory,$rootScope){
    $scope.newschool = {};
$scope.loadingImage = true;

 vehicleFactory.fetchvehicleTypes().then(function(data){
           console.log(data);
           if(data.data.status === "Success"){
                 $scope.loadingImage = false;
                $scope.vehicletypes = data.data.data;

           }else{
               $scope.confirmationMessage = "Error : "+data.data;
                 $scope.loadingImage = false;
                $scope.invalidialogShown = true;
           }
         });
   
    
    $scope.SubmitVehicle = function () {
         var arrList =  $scope.vehicletype.split(",");
          $scope.vehicletypeid = arrList[0];
          $scope.vehicletype = arrList[1];
        var dataToPass = {
            officeid: $rootScope.userObj.officeid,               
            status:"Y",
            createdby: $rootScope.userObj.officeid,
            vehicletype: $scope.vehicletype,
            vehicletypeid: $scope.vehicletypeid,
            chassisnumber: $scope.chassisnumber,  
            oname: $scope.oname,  
            omobile: $scope.omobile,  
            vehicleno: $scope.vehicleno,  
            dopurchase: $scope.dopurchase,  
            pollutionexpdate: $scope.pollutionexpdate,  
            fitnessexpdate: $scope.fitnessexpdate, 
            roadtax: $scope.roadtax
            
        };
    console.log(angular.toJson(dataToPass));
      vehicleFactory.addVehicle(dataToPass).then(function(data){
          console.log(data); 
        if(data.data.status === "Success"){
                $scope.loadingImage = false; 
                $scope.status = "Vehicle Added Succesfully";
                $scope.showModal2 = !$scope.showModal2;
                $state.go("taxi.vehicleregistration"); 
           }else{
                $scope.confirmationMessage = "Error : "+data.data;
                $scope.loadingImage = false;
                $scope.invalidialogShown = true;
           }
        
         });
         };
});

