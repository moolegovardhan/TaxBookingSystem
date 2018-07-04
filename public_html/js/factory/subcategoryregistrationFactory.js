var f = angular.module("SubCategoryFactModule", ["dataservices"]);

f.factory("subcategorycontroller",function(DataFactory){
   
  return {
      
         fetchcategories: function(){
           url = "fetchcategories/";
           return DataFactory.fetchDataFromService(url);
        },
           addsubcategory: function(addsubcategory){
			url = "";
			return DataFactory.postDatatoService(url,addsubcategory);
		 }
    };
});

