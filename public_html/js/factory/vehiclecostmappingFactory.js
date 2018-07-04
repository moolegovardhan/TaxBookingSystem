var f = angular.module("VehicleCostMapFactModule", ["dataservices"]);

f.factory("vehiclecostmapFactory",function(DataFactory){
   
  return {
      
        fetchvehicleTypes: function(){
           url = "/fetchvehicleTypes/"+ officeid;
           return DataFactory.fetchDataFromService(url);
        },
                mapVehicleCost: function(mapVehicleCost){
			url = "";
			return DataFactory.postDatatoService(url,mapVehicleCost);
		 }
    };
});

