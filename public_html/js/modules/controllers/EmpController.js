var EmpMasterController=angular.module("EmpCtrlAddMastersModule",["EmpAddServiceModule"]);

EmpMasterController.controller("DepartmentController",function($scope,DepartmentService){
    $scope.sort = function(keyname){
		$scope.sortKey = keyname;   //set the sortKey to the param passed
		$scope.reverse = !$scope.reverse; //if true make it false and vice versa
	}
    
   var flag;
    $scope.departmentlist=DepartmentService.getAllDept();
	console.log($scope.departmentlist);
    $scope.save=function(){
       if($scope.departmentItem.id==undefined){
		   
               DepartmentService.addDeptItem($scope.departmentItem);
		   growl.success('your data is saved succssfully.',{title: 'Success!'});
		   }
        else {
            DepartmentService.updateDeptItem($scope.departmentItem,flag);
			growl.success('your data is updated succssfully.',{title: 'Success!'});
        }
        $scope.departmentItem={}
        },
    
     $scope.remove=function(idx,deptid){
        DepartmentService.deleteDeptItem(idx,deptid);
		 growl.success('your data is removed succssfully.',{title: 'Success!'});
    },
     
     $scope.edit=function(idx,editdeptitem){
        $scope.departmentItem=angular.copy(editdeptitem);
        flag=idx;
		 
    }
     
})
EmpMasterController.controller("DesignationController",function($scope,DesignationService,DepartmentService){
    var flag;
    $scope.departmentlist=DepartmentService.getAllDept();
    $scope.designationlist=DesignationService.getAllDesignation();
    $scope.save=function(){
        if($scope.designation.id==undefined)
            {
                DesignationService.addDesignationItem($scope.designation);
                growl.success("Your Data Saved Successfully",{title:"Success"});
            }
        else{
            DesignationService.updateDesignationItem($scope.designation,flag)
            growl.success("Your Data Updated",{title:"Success"});
        }
        $scope.designation={};//update ngmodel
    },
    $scope.remove=function(idx,designationid){
        DesignationService.deleteDesignationItem(idx,designationid);
            growl.success("Your Data Deleted",{title:"Success"});
    },
    $scope.edit=function(idx,editdesignation){
        $scope.designation=angular.copy(editdesignation);
        flag=idx;
        
    }
})
EmpMasterController.controller("LeaveAddController",function($scope,LeaveService){
	$scope.Leaveitemlist=LeaveService.getAllLeaveItems();
	var flag;
	$scope.save=function(){
		if($scope.leaveitem.id == undefined){
				LeaveService.addLeaveItem($scope.leaveitem);
			 growl.success('your data is saved succssfully.',{title: 'Success!'});
		}
		else{
			LeaveService.updateLeaveItem($scope.leaveitem,flag);
			growl.success('your data is updated succssfully.',{title: 'Success!'});
		}
		$scope.leaveitem={}
	},
		 $scope.remove=function(idx,leaveid)
        {
            LeaveService.deleteLeaveItem(idx,leaveid);
		growl.success('your data is removed succssfully.',{title: 'Success!'});
        },
		 $scope.edit=function(idx,editleaveitem)
    {
        $scope.leaveitem=angular.copy(editleaveitem);
        flag=idx;
    }
})
EmpMasterController.controller("EmpAddController",function($filter,$scope,EmpAddService,DepartmentService,DesignationService,AttendanceService){
	    $scope.CurrentDate = new Date();
    
    $scope.departmentlist=DepartmentService.getAllDept();
    $scope.designationlist=DesignationService.getAllDesignation();
	$scope.empitemlist=EmpAddService.getAllEmpAddItems();
    $scope.attendlist=AttendanceService.getAllEmp();
    
   	$scope.checkin=function(list){
              var orderedItem={"empid":list.empid,"deptname":list.deptname,"designationname":list.designationname,"in":$scope.CurrentDate,"date":$scope.CurrentDate};
         var exists=false;
        angular.forEach($scope.attendlist,function(list){
            if(list.empid==orderedItem.empid){
                exists=true;
               return false
            }
        })
        if(!exists){
            AttendanceService.addAttends(orderedItem);
        }
	}
    
    $scope.checkout=function(list){
   
             var orderedItem={"empid":list.empid,"out":$scope.log};
         
        angular.forEach($scope.attendlist,function(list){
            if(list.empid==orderedItem.empid){
                  
                $scope.log=new Date();
         
                
            }
                       AttendanceService.addAttends(orderedItem);
        })
        
	}
    
    $scope.empitemlist=angular.extend($scope.empitemlist,$scope.attendlist);
    console.log($scope.empitemlist);
    
	var flag;
	$scope.save=function(){
		if($scope.empadditem.id == undefined){
			EmpAddService.addEmpAddItem($scope.empadditem);
			growl.success('your data is updated succssfully.',{title: 'Success!'});
			}
		else{
			EmpAddService.updateEmpItem($scope.empadditem,flag);
			growl.success('your data is updated succssfully.',{title: 'Success!'});
		}
		$scope.empadditem={}
	},
		 $scope.remove=function(idx,empaddid)
        {
            EmpAddService.deleteEmpItem(idx,empaddid);
		    growl.success('your data is removed succssfully.',{title: 'Success!'});
        },
		 $scope.edit=function(idx,editempadditem)
    {
        $scope.empadditem=angular.copy(editempadditem);
        flag=idx;
    }
})
EmpMasterController.controller("ShiftController",function($scope,ShiftService){
    
   var flag;
    $scope.shiftlist=ShiftService.getAllShiftTime();//table data sending
    
       $scope.shifttime=new Date();
    
    $scope.save=function(){
    
       
       if($scope.shifttime.id==undefined){//ngmodel checking
               ShiftService.addAllShiftTime($scope.shifttime);
           growl.success("Your Data Saved Successfully",{title:"Success"});
       }
        else{
            ShiftService.updateAllShiftTime($scope.shifttime,flag);
            growl.success("Your Data Updated",{title:"Success"});
        }
        $scope.shifttime={} // update ngmodel
        } 
    
     $scope.remove=function(idx,shiftid){
        ShiftService.deleteAllShiftTime(idx,shiftid);
         growl.success("Your Data Deleted",{title:"Success"});
    }
     
     $scope.edit=function(idx,editshifttime){
        $scope.shifttime=angular.copy(editshifttime);
        flag=idx;
    }
     
})
EmpMasterController.controller("ShiftAssignController",function($scope,ShiftAssignService,ShiftService){
	$scope.shiftlist=ShiftService.getAllShiftTime();
})

EmpMasterController.controller("LeaveApplyController",function($scope,LeaveApplyService,LeaveService){
	$scope.leave={} 
$scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy'];
  $scope.format = $scope.formats[2];
		$scope.Leaveitemlist=LeaveService.getAllLeaveItems();
	$scope.SaveLeave=function(){
		console.log($scope.leave.leavetype)
		$scope.getDuration = function(start, end) {
		if(start<end){
    try {
      return ((moment.duration(start - end)).humanize());
    } catch (e) {
      return "Cant evaluate"
    }
	}
			else{
				
				 /*growl.error('From Date always lessthan to date',{title: 'Error!'});*/
			}
  };
		 
	if($scope.leave.id == undefined){
        $scope.getDuration();
		LeaveApplyService.addAllapplyLeaveItem($scope.leave);
		console.log($scope.leave.leavetype)
		$scope.leave={} 
	}
		
		
	}
	
});

							   