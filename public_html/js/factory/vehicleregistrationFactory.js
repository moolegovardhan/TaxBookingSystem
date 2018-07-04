var f = angular.module("VehicleFactModule", ["dataservices"]);

f.factory("vehicleFactory",function(DataFactory){
   
  return {
      
        fetchvehicleTypes: function(){
           url = "fetchvehicleTypes/";
           return DataFactory.fetchDataFromService(url);
        },
                addVehicle: function(addVehicle){
			url = "";
			return DataFactory.postDatatoService(url,addVehicle);
		 }
    };
});

