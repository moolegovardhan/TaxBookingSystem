var f = angular.module("FactModule", ["ngResource"]);

f.factory("LoginFactory", function($resource){
    var users = [{"username":"Satya", "role":"admin"}]
    
    return {
        getUserDetails: function(){
            return users;
        }
    }
})