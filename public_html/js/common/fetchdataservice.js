var fact = angular.module('dataservices', ["ngResource"]);

var rootURL = "http://localhost:8080/healthcare/protek"; 
fact.factory('DataFactory', function($resource,$http,$rootScope){
	
	return {
		  fetchDataFromService: function(url,insttype,officeid,userid){
			  if(url.indexOf('auth') > 0){
			    var config = {
                                    headers : {
                                        'Content-Type': 'application/json'
                                    }
                                }
                            }else{
                                var config = {
                                    headers : {
                                        'Content-Type': 'application/json',
                                        'userid':userid,
                                        'officeid':officeid,
                                        'insttype':insttype
                                    }
                                }
                            }  
			     fullDate = new Date();//console.log(fullDate);
				 twoDigitMonth = fullDate.getMonth()+"";if(twoDigitMonth.length==1)	twoDigitMonth="0" +twoDigitMonth;
				 currentMonth = (parseInt(twoDigitMonth)+parseInt(1));
				 twoDigitDate = fullDate.getDate()+"";if(twoDigitDate.length==1)	twoDigitDate="0" +twoDigitDate;
				 currentDate =  fullDate.getFullYear() + "-" +currentMonth +"-"+twoDigitDate ;
			     finalURL = rootURL+url;
			// console.log("Final url.......................   "+url); 
                          //  console.log("rootURL URL.......................   "+rootURL); 
			  console.log("Final URL.......................   "+finalURL); 
			    return $http.get(finalURL,config).then(function(response){
				//return $http.get(finalURL,config).then(function(response){
			    //console.log(response);
			
				//data = response; 
				console.log(response);
				//console.log(data[0].name+data[0].dispaly+data[0].incorpdate+data[0].email);			
				return response; 
					
				});
		},
		postDatatoService: function(url,dataToPass,userid,officeid,insttype){
			
			var config = {
                                    headers : {
                                        'Content-Type': 'application/json',
                                        'userid':userid,
                                        'officeid':officeid,
                                        'insttype':insttype
                                    }
                                }
			     fullDate = new Date();//console.log(fullDate);
				 twoDigitMonth = fullDate.getMonth()+"";if(twoDigitMonth.length==1)	twoDigitMonth="0" +twoDigitMonth;
				 currentMonth = (parseInt(twoDigitMonth)+parseInt(1));
				 twoDigitDate = fullDate.getDate()+"";if(twoDigitDate.length==1)	twoDigitDate="0" +twoDigitDate;
				 currentDate =  fullDate.getFullYear() + "-" +currentMonth +"-"+twoDigitDate ;
			     finalURL = rootURL+url;
			    console.log(finalURL);
			    console.log(angular.toJson(dataToPass)); //alert(finalURL);
			    return  $http.post(finalURL, angular.toJson(dataToPass), config).then(function (response){
				//console.log(res); 
				console.log("inserted");
					return response;
				});
		},
            deleteDataFromService: function (url) {
            var config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                },
                fullDate = new Date(); //console.log(fullDate);
            twoDigitMonth = fullDate.getMonth() + "";
            if (twoDigitMonth.length == 1) twoDigitMonth = "0" + twoDigitMonth;
            currentMonth = (parseInt(twoDigitMonth) + parseInt(1));
            twoDigitDate = fullDate.getDate() + "";
            if (twoDigitDate.length == 1) twoDigitDate = "0" + twoDigitDate;
            currentDate = fullDate.getFullYear() + "-" + currentMonth + "-" + twoDigitDate;
            finalURL = rootURL + url;
            /* console.log("Final URL.......................   "+finalURL); */
            return $http.put(finalURL, config).then(function (response) {
                //return $http.get(finalURL,config).then(function(response){
                //console.log(response.data[0].name+" in data");
                data = response;
                console.log(data);
                //console.log(data[0].name+data[0].dispaly+data[0].incorpdate+data[0].email);			
                return data;
            });
        },
        updateDatatoService: function (url, dataToPass) {
            var config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                },
                fullDate = new Date(); //console.log(fullDate);
            twoDigitMonth = fullDate.getMonth() + "";
            if (twoDigitMonth.length == 1) twoDigitMonth = "0" + twoDigitMonth;
            currentMonth = (parseInt(twoDigitMonth) + parseInt(1));
            twoDigitDate = fullDate.getDate() + "";
            if (twoDigitDate.length == 1) twoDigitDate = "0" + twoDigitDate;
            currentDate = fullDate.getFullYear() + "-" + currentMonth + "-" + twoDigitDate;
            finalURL = rootURL + url;
            console.log(finalURL);
            
            console.log(angular.toJson(dataToPass)); //alert(finalURL);
            return $http.put(finalURL, dataToPass ).then(function (res) {
                console.log(res);
                console.log("updated");
                return res;
            });
        }
                
	}
});	