var agent = angular.module("CategoryCtrlModule", ["CategoryFactModule"]);
 
    
agent.run(function($rootScope){
     $rootScope.loadingImage = false;
      $rootScope.invalidialogShown = false;
    $rootScope.status = "";
   
});


agent.controller("categorycontroller", function($scope, $state, categoryFactory,$rootScope){
   
$scope.loadingImage = true;

      $scope.addcategory = [];
      
       $scope.addcategory = function(){
      
            var dataToPass = {               
                "categoryname": $scope.categoryname,
                "description": $scope.description                
            };
                console.log(dataToPass);
        $scope.categories.push(dataToPass);
       console.log(angular.toJson($scope.categories));
       $scope.category=$scope.categories;

      };
      
    $scope.cancelcategory= function (category) {
        $scope.category.splice(category, 1);
    };
    
    $scope.SubmitCategory = function () {
        var dataToPass = {
            officeid: $rootScope.userObj.officeid,               
            status:"Y",
            createdby: $rootScope.userObj.officeid,
            category: $scope.category
        };
    console.log(angular.toJson(dataToPass));
      categoryFactory.addingcategory(dataToPass).then(function(data){
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

