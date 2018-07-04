var f = angular.module("CustomerRegistrationFactModule", ["dataservices"]);

f.factory("customerregistrationFactory",function(DataFactory){
   
  return {
      
        fetchDistrict: function(statename){
           url = "/fetchdistrict/details/"+ statename;
           return DataFactory.fetchDataFromService(url);
        },
                addCustomer: function(addCustomer){
			url = "/customer/create";
			return DataFactory.postDatatoService(url,addCustomer);
		 }
    };
});

