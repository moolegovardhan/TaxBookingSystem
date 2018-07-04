var vehicle = angular.module("SubCategoryCtrlModule", ["SubCategoryFactModule"]);
 
    
vehicle.run(function($rootScope){
     $rootScope.loadingImage = false;
      $rootScope.invalidialogShown = false;
    $rootScope.status = "";
   
});


vehicle.controller("subcategorycontroller", function($scope, $state, subcategoryFactory,$rootScope){
    $scope.newschool = {};
$scope.loadingImage = true;

subcategoryFactory.fetchcategories().then(function(data){
           console.log(data);
           if(data.data.responseMessageDetails.status === "Success"){
                 $scope.loadingImage = false;
                $scope.categories = data.data.responseMessageDetails.data;

           }else{
               $scope.confirmationMessage = "Error : "+data.data;
                 $scope.loadingImage = false;
                $scope.invalidialogShown = true;
           }
         });
   $scope.addSubCategory = function(){
      var arrList =  $scope.category.split(",");
          $scope.categoryid = arrList[0];
          $scope.categoryname = arrList[1];
          
            var dataToPass = {               
                "categoryname": $scope.categoryname,
                "subcategoryname": $scope.subcategory,
                "description": $scope.description,
                
            };
                console.log(dataToPass);
        $scope.subcats.push(dataToPass);
       console.log(angular.toJson($scope.subcats));
       $scope.subcategory=$scope.subcats;

      };
    $scope.cancelsubcategory = function (subcat) {
        $scope.subcat.splice(subcat, 1);
    };
    $scope.submitSubCategory = function () {
         
          
        var dataToPass = {
            officeid: $rootScope.userObj.officeid,               
            status:"Y",
            createdby: $rootScope.userObj.officeid,
            subcategory:$scope.subcategory             
        };
    console.log(angular.toJson(dataToPass));
      subcategoryFactory.addsubcategory(dataToPass).then(function(data){
          console.log(data); 
        if(data.data.responseMessageDetails.status === "Success"){
                $scope.loadingImage = false; 
                $scope.status = "Subcategory added Succesfully";
                $scope.showModal2 = !$scope.showModal2;
                $state.go("taxi.subcategoryregistration"); 
           }else{
                $scope.confirmationMessage = "Error : "+data.data;
                $scope.loadingImage = false;
                $scope.invalidialogShown = true;
           }
        
         });
         };
});

