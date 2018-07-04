var f = angular.module("AgentRegistrationFactModule", ["dataservices"]);

f.factory("agentregistrationFactory",function(DataFactory){
   
  return {
      
        fetchDistrict: function(statename){
           url = "/fetchdistrict/details/"+ statename;
           return DataFactory.fetchDataFromService(url);
        },
                addAgent: function(addAgent){
			url = "/agent/create";
			return DataFactory.postDatatoService(url,addAgent);
		 }
    };
});

