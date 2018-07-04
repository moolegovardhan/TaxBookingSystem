var c = angular.module("AgentCtrlModule", ["AgentRegistrationFactModule"]);
 
    
c.run(function($rootScope){
     $rootScope.loadingImage = false;
      $rootScope.invalidialogShown = false;
    $rootScope.status = "";
   
});


c .controller("agentRegistrationController", function($scope, $state, agentregistrationFactory,$rootScope){
   
$scope.loadingImage = true;

        $scope.getDistrict = function(){
     agentregistrationFactory.fetchDistrict($scope.statename).then(function(data){
         console.log("in district controller");
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
         
         $scope.SubmitAgent = function () {
        
                if($scope.fname==''||$scope.fname==undefined){
                 $scope.fname=='';
             }
              if($scope.mname==''||$scope.mname==undefined){
                 $scope.mname=='';
             }
              if($scope.lname==''||$scope.lname==undefined){
                 $scope.lname=='';
             }
         var dataToPass = {                                           
                "fname": $scope.fname,
                "mname": $scope.mname,
                "lname": $scope.lname,
                "mobile": $scope.mobile,  
                "corporateaddress": $scope.corporateaddress,  
                "mailingaddress": $scope.mailingaddress,                
                "state": $scope.statename,
                "district": $scope.district,                
                "city": $scope.city,                
                "officeid": "1",                
                "status":"Y",
                "createdby": "admin"
                };
                
               
        agentregistrationFactory.addAgent(dataToPass).then(function(data){
             //console.log(angular.toJson(dataToPass));
         // console.log(data); 
        if(data.data.status === "Success"){
                $scope.loadingImage = false; 
                $scope.status = "New Agent Created Succesfully";
                $scope.showModal2 = !$scope.showModal2;
                $state.go("taxi.agentregistration"); 
           }else{
                $scope.confirmationMessage = "Error : "+data.data;
                $scope.loadingImage = false;
                $scope.invalidialogShown = true;
           }
           
         });
     };
         
});

