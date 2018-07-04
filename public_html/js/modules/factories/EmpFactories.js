var EmpFactModule=angular.module("EmpAddFactModule",["ngResource"]);

EmpFactModule.factory("DepartmentFactory",function($resource){
    var deptinf;
    
    var deptResource=$resource("jsonData/Department.json");
    
    return{
        getDeptItem : function(){
            deptinf=deptResource.query();
            return deptinf;
        },
        addDeptItem:function(departmentItem){
            var dept = new deptResource(departmentItem);
            dept.$save(function(respdata){
                deptinf.push(respdata);
            },function(respdata){
                console.log("Error while saving the data");
            });
        },
        deleteDeptItem:function(idx,deptid){
            var dept=new deptResource({"id":deptid});
            dept.$delete(function(){
                deptinf.splice(idx,1);
            },function(){
                console.log("Error while Deleting....");
            })
        },
        updateDeptItem:function(editdeptitem,idx){
            var dept=new deptResource(editdeptitem);
            dept.$update(function(respdata){
            deptinf[idx]=respdata;
            })
        }
    } 
})
EmpFactModule.factory("DesignationFactory",function($resource){
    var desgninf;
    
    var designationResource=$resource("jsonData/Designation.json");
    
    return{
        getDesignation : function(){
            desgninf=designationResource.query();
            return desgninf;
        },
    
        addDesignation:function(designation){
            var desgn=new designationResource(designation);
            desgn.$save(function(respdata){
                desgninf.push(respdata);
            },function(resdata){
                console.log("Error while saving the data....")
            });
        },
        deleteDesignation:function(idx,designationid){
            var desgn=new designationResource({"id":designationid});
            desgn.$delete(function(){
                desgninf.splice(idx,1);
            },function(){
                console.log("Error while deleting");
            })
        },
        updateDesignation:function(editdesignation,idx){
            var desgn=new designationResource(editdesignation);
            desgn.$update(function(respdata){
                desgninf[idx]=respdata;
            })
        }
    }
})
EmpFactModule.factory("LeaveFactory",function($resource){
	var leaveInf;
	var leaveInfResource=$resource("jsonData/Leavetypes.json");
	
	return{
	 getLeaveItems:function()
		{
        leaveInf=leaveInfResource.query();
        return leaveInf;
    	},
        addLeaveItem:function(leaveitem){
            var addleave=new leaveInfResource(leaveitem);
            addleave.$save(function(leavedata){
                leaveInf.push(leavedata);
            },
                function(leavedata){
                console.log("Error..")
            });
        },
		deleteLeaveItem:function(idx,leaveid){
                var deleteleave=new leaveInfResource({"id":leaveid});
                deleteleave.$delete(function(){
                    leaveInf.splice(idx,1);
                },function(){
                    console.log("error delete")
                })
            },
		updateLeaveItem:function(editleaveitem,idx)
        {
            var Editleave=new leaveInfResource(editleaveitem);
            Editleave.$update(function(leavedata){
            leaveInf[idx]=leavedata;
             })
        }
		
	}
	
});
EmpFactModule.factory("EmpAddFactory",function($resource){
	var EmpAddInf;
	var EmpAddInfResource=$resource("jsonData/Employee.json");
	return{
	 getEmpAddItems:function()
		{
        EmpAddInf=EmpAddInfResource.query();
        return EmpAddInf;
    	},
        addEmpAddItem:function(empadditem){
            var addEmp=new EmpAddInfResource(empadditem);
            addEmp.$save(function(empdata){
                EmpAddInf.push(empdata);
            },
                function(empdata){
                console.log("Error..")
            });
        },
		deleteEmpAddItem:function(idx,empaddid){
                var deleteemp=new EmpAddInfResource({"id":empaddid});
                deleteemp.$delete(function(){
                    EmpAddInf.splice(idx,1);
                },function(){
                    console.log("error delete")
                })
            },
		updateEmpAddItem:function(editempadditem,idx)
        {
            var Editemp=new EmpAddInfResource(editempadditem);
            Editemp.$update(function(empdata){
            EmpAddInf[idx]=empdata;
             })
        }
		
	}
});
EmpFactModule.factory("ShiftFactory",function($resource){
    
    var shiftinf;
    var shiftResource=$resource("jsonData/Shift.json");
    return{
        getShiftTime : function(){
            shiftinf=shiftResource.query();
            return shiftinf;
        },
        addShiftTime:function(shifttime){
            var shift = new shiftResource(shifttime);//ng-model pass
            shift.$save(function(respdata){
                shiftinf.push(respdata);
            },function(respdata){
                console.log("Error while saving the data");
            });
        },
        deleteShiftTime:function(idx,shiftid){
            var shift=new shiftResource({"id":shiftid});
            shift.$delete(function(){
                shiftinf.splice(idx,1);
            },function(){
                console.log("Error while Deleting....");
            })
        },
        updateShiftTime:function(editshifttime,idx){
            var shift=new shiftResource(editshifttime);
            shift.$update(function(respdata){
            shiftinf[idx]=respdata;
            })
        }
    } 
})
EmpFactModule.factory("ShiftAssignFactory",function($resource){
	var ShiftAssignInf;
	var ShiftAssignInfResource=$resource("mydata.json");
	return{
	 getShiftAssignInformation:function()
		{
        ShiftAssignInf=ShiftAssignInfResource.query();
        return ShiftAssignInf;
		}
	}	
});
EmpFactModule.factory("LeaveApplyFactory",function($resource){
	var leaveApplyInf;
	var leaveApplyInfResource=$resource("http://localhost:2403/leave/:id",{"id":"@id"},{update:{method:'put'}});
	return{
	 getLeaveItems:function()
		{
        leaveApplyInf=leaveApplyInfResource.query();
        return leaveApplyInf;
		},
		addLeaveItem:function(leave){
            var leaveinfdata=new leaveApplyInfResource(leave);
            leaveinfdata.$save(function(respdata){
                leaveApplyInf.push(respdata);
            },
                function(respdata){
                console.log("Error..")
            })
        }
	}
});

EmpFactModule.factory("AttendanceFactory",function($resource){
    var attendinfo;
    /*var attendResource=$resource("http://localhost:2403/attendance");*/
    var attendResource=$resource("jsonData/attendance.json");
    return{
        
        
        getAttend : function(){
            attendinfo=attendResource.query();
            return attendinfo;
        },
        addAttend:function(attend){
            var attends = new attendResource(attend);
            attends.$save(function(respdata){
                attendinfo.push(respdata);
            },function(respdata){
                console.log("Error while saving the data");
            });
        }/*,
        deleteDeptItem:function(idx,deptid){
            var dept=new deptResource({"id":deptid});
            dept.$delete(function(){
                deptinf.splice(idx,1);
            },function(){
                console.log("Error while Deleting....");
            })
        },
        updateDeptItem:function(editdeptitem,idx){
            var dept=new deptResource(editdeptitem);
            dept.$update(function(respdata){
            deptinf[idx]=respdata;
            })
        }*/
    } 
})