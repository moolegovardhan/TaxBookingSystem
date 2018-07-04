var agent = angular.module("CustomerRegistrationCtrlModule", ["CustomerRegistrationFactModule"]);
 
    
agent.run(function($rootScope){
     $rootScope.loadingImage = false;
      $rootScope.invalidialogShown = false;
    $rootScope.status = "";
   
});


agent.controller("customerregistrationController", function($scope, $state, customerregistrationFactory,$rootScope){
   
$scope.loadingImage = true;

        $scope.getDistrict = function(){
            console.log("in Customer controller")
     customerregistrationFactory.fetchDistrict($scope.statename).then(function(data){
           console.log(data);
           if(data.data.status === "Success"){
                 $scope.loadingImage = false;
                $scope.states = data.data.data;
           }else{
               $scope.confirmationMessage = "Error : "+data.data;
                 $scope.loadingImage = false;
                $scope.invalidialogShown = true;
           }
         });
         };
         
         $scope.SubmitCustomer = function () {
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
                officeid: "1",                
                status:"Y",
                createdby: "admin"
                };
        customerregistrationFactory.addCustomer(dataToPass).then(function(data){
          console.log(data); 
        if(data.data.status === "Success"){
                $scope.loadingImage = false; 
                $scope.status = "New Customer Created Succesfully";
                $scope.showModal2 = !$scope.showModal2;
                $state.go("taxi.customerregistration"); 
           }else{
                $scope.confirmationMessage = "Error : "+data.data;
                $scope.loadingImage = false;
                $scope.invalidialogShown = true;
           }
           
         });
     };
         
});

