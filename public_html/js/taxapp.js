console.log("in app controller");
var taxiapp = angular.module("taxapp",["ui.router", "ngModal","ngAnimate", "ui.router","CtrlModule","AgentCtrlModule",
    "LocationCtrlModule","DepartmentCtrlModule","CustomerRegistrationCtrlModule","angularUtils.directives.dirPagination"]);

//var webURL = "http://localhost:8080/healthcare/protek/";

taxiapp.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/login");
    
    $stateProvider.state("taxi", {url:"/taxi", abstract: true, templateUrl:"partials/taxipanel.html"})
    .state("login", {url:"/login", templateUrl:"partials/login.html", controller: "LoginController"})
    .state("taxi.agentregistration", {url:"/agentregistration", templateUrl:"partials/taxi.agentregistration.html", controller: "agentRegistrationController"})
    .state("taxi.depatmentregistration", {url:"/depatmentregistration", templateUrl:"partials/taxi.depatmentregistration.html", controller: "departmentcontroller"})
    .state("taxi.vehicletyperegistration", {url:"/vehicletyperegistration", templateUrl:"partials/taxi.vehicletyperegistration.html"})
    .state("taxi.vehicleregistration", {url:"/vehicleregistration", templateUrl:"partials/taxi.vehicleregistration.html"})
    .state("taxi.driveregistration", {url:"/driveregistration", templateUrl:"partials/taxi.driveregistration.html"})
    .state("taxi.locationmaster", {url:"/locationmaster", templateUrl:"partials/taxi.locationmaster.html", controller: "locationController"})
    .state("taxi.vehiclecostmapping", {url:"/vehiclecostmapping", templateUrl:"partials/taxi.vehiclecostmapping.html"})
    .state("taxi.vehicleextrastmapping", {url:"/vehicleextrastmapping", templateUrl:"partials/taxi.vehicleextrastmapping.html"})
    .state("taxi.drivermapping", {url:"/drivermapping", templateUrl:"partials/taxi.drivermapping.html"})
    .state("taxi.customerregistration", {url:"/customerregistration", templateUrl:"partials/taxi.customerregistration.html", controller: "customerregistrationController"})
   .state("taxi.categoryregistration", {url:"/categoryregistration", templateUrl:"partials/taxi.categoryregistration.html"})   
    .state("taxi.subcategoryregistration", {url:"/subcategoryregistration", templateUrl:"partials/taxi.subcategoryregistration.html"})
    .state("taxi.driververification", {url:"/driververification", templateUrl:"partials/taxi.driververification.html"})   
    .state("taxi.customerlocationsearch", {url:"/customerlocationsearch", templateUrl:"partials/taxi.customerlocationsearch.html"}) 
    .state("taxi.customerlocationvehiclefares", {url:"/customerlocationvehiclefares", templateUrl:"partials/taxi.customerlocationvehiclefares.html"})                    
   
});
    
console.log("Hello welcome taxiapp");
  
taxiapp.directive('modal', function () {
    return {
      template: '<div class="modal fade">' + 
          '<div class="modal-dialog">' + 
            '<div class="modal-content">' + 
              '<div class="modal-header">' + 
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' + 
                '<h4 class="modal-title">{{ title }}</h4>' + 
              '</div>' + 
              '<div class="modal-body" ng-transclude></div>' + 
            '</div>' + 
          '</div>' + 
        '</div>',
      restrict: 'E',
      transclude: true,
      replace:true,
      scope:true,
      link: function postLink(scope, element, attrs) {
        scope.title = attrs.title;

        scope.$watch(attrs.visible, function(value){
          if(value == true)
            $(element).modal('show');
          else
            $(element).modal('hide');
        });

        $(element).on('shown.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = true;
          });
        });

        $(element).on('hidden.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = false;
          });
        });
      }
    };
  });
    