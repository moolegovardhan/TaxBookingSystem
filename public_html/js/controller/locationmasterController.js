console.log("in Location controller");
var agent = angular.module("LocationCtrlModule", ["LocationFactModule"]);


agent.run(function ($rootScope) {
    $rootScope.loadingImage = false;
    $rootScope.invalidialogShown = false;
    $rootScope.status = "";

});


agent.controller("locationController", function ($scope, $state, locationFactory, $rootScope) {
//console.log("hello Location controller");
    $scope.loadingImage = true;

 $scope.getLocation = function(){
     
     locationFactory.fetchlocation($scope.locationName).then(function(data){
        // console.log("in Location controller");
           console.log(data);
           
           if(data.data.status === "Success"){
                 $scope.loadingImage = false;
                $scope.locations = data.data.data;
           }else{
               $scope.confirmationMessage = "Error : "+data.data;
                 $scope.loadingImage = false;
                $scope.invalidialogShown = true;
           }
         });
         };
         
         
         
    $scope.addLocation = [];

    $scope.addLocation = function () {

        var dataToPass = {
            "location": $scope.location,
        };

        console.log(dataToPass);
        $scope.locations.push(dataToPass);
        console.log(angular.toJson($scope.locations));
        $scope.location = $scope.locations;

    };

    $scope.cancellocation = function (location) {
        $scope.location.splice(location, 1);
    };

    $scope.SubmitLocation = function () {
        var dataToPass = {
            officeid: $rootScope.userObj.officeid,
            status: "Y",
            createdby: $rootScope.userObj.officeid,
            location: $scope.location
        };

        console.log(angular.toJson(dataToPass));
        locationFactory.addinglocation(dataToPass).then(function (data) {
            console.log(data);
            if (data.data.responseMessageDetails.status === "Success") {
                $scope.loadingImage = false;
                $scope.status = "Location Added Succesfully";
                $scope.showModal2 = !$scope.showModal2;
                $state.go("taxi.locationmaster");
            } else {
                $scope.confirmationMessage = "Error : " + data.data;
                $scope.loadingImage = false;
                $scope.invalidialogShown = true;
            }

        });
    };
});

