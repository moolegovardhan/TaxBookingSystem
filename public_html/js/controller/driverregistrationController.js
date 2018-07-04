var agent = angular.module("DriverRegistrationCtrlModule", ["DriverRegistrationFactModule"]);
 
    
agent.run(function($rootScope){
     $rootScope.loadingImage = false;
      $rootScope.invalidialogShown = false;
    $rootScope.status = "";
   
});


agent.controller("driverregistrationController", function($scope, $state, driverregistrationFactory,$rootScope){
   
$scope.loadingImage = true;

        $scope.getDistrict = function(){
     driverregistrationFactory.fetchDistrict($scope.statename).then(function(data){
           console.log(data);
           if(data.data.responseMessageDetails.status === "Success"){
                 $scope.loadingImage = false;
                $scope.states = data.data.responseMessageDetails.data;
           }else{
               $scope.confirmationMessage = "Error : "+data.data;
                 $scope.loadingImage = false;
                $scope.invalidialogShown = true;
           }
         });
         };
         
         $scope.SubmitDriver = function () {
                if($scope.fname==''||$scope.fname==undefined){
                 $scope.fname='';
             }
              if($scope.mname==''||$scope.mname==undefined){
                 $scope.mname='';
             }
              if($scope.lname==''||$scope.lname==undefined){
                 $scope.lname='';
             }
         var dataToPass = {                                           
                firstname: $scope.fname,
                middlename: $scope.mname,
                lastname: $scope.lname,
                mobile: $scope.mobile,  
                address1: $scope.addline1,  
                address2: $scope.addline2,                
                state: $scope.statename,
                district: $scope.district,                
                city: $scope.city,
                licensenumber: $scope.licensenumber,
                dob: $scope.dob,
                bloodgroup: $scope.bloodgroup,
                officeid: $rootScope.userObj.officeid,                
                status:"Y",
                createdby: $rootScope.userObj.officeid
                };
        driverregistrationFactory.addDriver(dataToPass).then(function(data){
          console.log(data); 
        if(data.data.responseMessageDetails.status === "Success"){
                $scope.loadingImage = false; 
                $scope.status = "New Driver Created Succesfully";
                $scope.showModal2 = !$scope.showModal2;
                $state.go("taxi.driverregistration"); 
           }else{
                $scope.confirmationMessage = "Error : "+data.data;
                $scope.loadingImage = false;
                $scope.invalidialogShown = true;
           }
           
         });
     };
         
});

