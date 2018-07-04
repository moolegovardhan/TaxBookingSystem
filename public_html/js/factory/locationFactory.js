var f = angular.module("LocationFactModule", ["dataservices"]);

f.factory("locationFactory",function(DataFactory){
   
  return {
         fetchlocation: function(locationname){
            url = "/locationname/details/"+ locationName;
            return DataFactory.fetchDataFromService(url);
        },
        
          addinglocation: function(addlocation){
			url = "location/create";
			return DataFactory.postDatatoService(url,addlocation);
		 }
    };
});

