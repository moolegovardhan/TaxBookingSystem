var f = angular.module("DriverRegistrationFactModule", ["dataservices"]);

f.factory("driverregistrationFactory",function(DataFactory){
   
  return {
      
        fetchDistrict: function(statename){
           url = "fetchDistrict/"+ statename;
           return DataFactory.fetchDataFromService(url);
        },
                addDriver: function(addDriver){
			url = "";
			return DataFactory.postDatatoService(url,addDriver);
		 }
    };
});

