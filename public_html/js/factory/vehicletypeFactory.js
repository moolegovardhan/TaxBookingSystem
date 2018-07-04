var f = angular.module("VehicleTypeFactModule", ["dataservices"]);

f.factory("vehicletypeFactory",function(DataFactory){
   
  return {
        
          addingvehicle: function(addvehicle){
			url = "";
			return DataFactory.postDatatoService(url,addvehicle);
		 }
    };
});

