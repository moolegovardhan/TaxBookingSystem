var f = angular.module("CategoryFactModule", ["dataservices"]);

f.factory("categoryFactory",function(DataFactory){
   
  return {
        
          addingcategory: function(addcategory){
			url = "";
			return DataFactory.postDatatoService(url,addcategory);
		 }
    };
});

