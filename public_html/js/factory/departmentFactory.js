var f = angular.module("DeptFactModule", ["dataservices"]);

f.factory("departmentFactory",function(DataFactory){
   
  return {
        
          adddepartment: function(adddept){
			url = "/department/create";
			return DataFactory.postDatatoService(url,adddept);
		 }
                 
                 
    };
});

