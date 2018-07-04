var agent = angular.module("DepartmentCtrlModule", ["DeptFactModule"]);
 
    
agent.run(function($rootScope){
     $rootScope.loadingImage = false;
      $rootScope.invalidialogShown = false;
    $rootScope.status = "";
   
});


agent.controller("departmentcontroller", function($scope, $state, departmentFactory,$rootScope){
   
$scope.loadingImage = true;
cosole.log("hi dept controller")
      $scope.adddepartment = [];
      
       $scope.adddepartment = function(){
      

            var dataToPass = {               
                "department": $scope.department,
                "description": $scope.description                
            };
            
                console.log(dataToPass);
        $scope.departments.push(dataToPass);
       console.log(angular.toJson($scope.departments));
       $scope.department=$scope.departments;

      };
      
    $scope.canceldepartment = function (department) {
        $scope.department.splice(department, 1);
    };
    
    $scope.submitdepartment = function () {
        var dataToPass = {
            officeid: "1",               
            status:"Y",
            createdby: "admin",
            department: $scope.department
        };
    console.log(angular.toJson(dataToPass));
      departmentFactory.adddepartment(dataToPass).then(function(data){
          console.log(data); 
        if(data.data.status === "Success"){
                $scope.loadingImage = false; 
                $scope.status = "Department Added Succesfully";
                $scope.showModal2 = !$scope.showModal2;
                $state.go("taxi.departmentregistration"); 
           }else{
                $scope.confirmationMessage = "Error : "+data.data;
                $scope.loadingImage = false;
                $scope.invalidialogShown = true;
           }
           
         });
         };
});

