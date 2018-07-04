var f = angular.module("DriverMapFactModule", ["dataservices"]);

f.factory("drivermapFactory",function(DataFactory){
   
  return {
      
         fetchdrivers: function(){
           url = "fetchDrivers/";
           return DataFactory.fetchDataFromService(url);
        },
        fetchvehicleTypes: function(){
           url = "fetchvehicleTypes/";
           return DataFactory.fetchDataFromService(url);
        },
                mappingDriver: function(mapDriver){
			url = "";
			return DataFactory.postDatatoService(url,mapDriver);
		 }
    };
});

