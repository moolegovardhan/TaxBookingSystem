var EmpServiceModule=angular.module("EmpAddServiceModule",["EmpAddFactModule"]);
EmpServiceModule.service("DepartmentService",function(DepartmentFactory){ // this keyword is must for service as its an constructor function
    this.getAllDept=function(){
        return DepartmentFactory.getDeptItem();
    }
    this.addDeptItem=function(departmentItem)
    {
        DepartmentFactory.addDeptItem(departmentItem);
    }
     this.deleteDeptItem=function(idx,deptid)
    {
        DepartmentFactory.deleteDeptItem(idx,deptid);
    }
    this.updateDeptItem=function(editdeptitem,idx){
        DepartmentFactory.updateDeptItem(editdeptitem,idx);
	}
    
})
EmpServiceModule.service("DesignationService",function(DesignationFactory/*,DepartmentFactory*/){

    this.getAllDesignation=function(){
        return DesignationFactory.getDesignation();
    },
    this.addDesignationItem=function(designation){
        DesignationFactory.addDesignation(designation);
    },
    this.deleteDesignationItem=function(idx,designationid){
        DesignationFactory.deleteDesignation(idx,designationid);
    },
    this.updateDesignationItem=function(editdesignation,idx){
        DesignationFactory.updateDesignation(editdesignation,idx);
    }
})
EmpServiceModule.service("LeaveService",function(LeaveFactory){
	
	 this.getAllLeaveItems=function(){
		 return LeaveFactory.getLeaveItems();
		},
	this.addLeaveItem=function(leaveitem){
        LeaveFactory.addLeaveItem(leaveitem);
    },
    this.deleteLeaveItem=function(idx,leaveid){
		  LeaveFactory.deleteLeaveItem(idx,leaveid);
	 },
	 this.updateLeaveItem=function(editleaveitem,idx)
     {
         LeaveFactory.updateLeaveItem(editleaveitem,idx);
     }   
	
})
EmpServiceModule.service("EmpAddService",function(EmpAddFactory){
	
	 this.getAllEmpAddItems=function(){
		 return EmpAddFactory.getEmpAddItems();
		},
	this.addEmpAddItem=function(empadditem){
        EmpAddFactory.addEmpAddItem(empadditem);
    }
    this.deleteEmpItem=function(idx,empaddid){
		  EmpAddFactory.deleteEmpAddItem(idx,empaddid);
	 },
	 this.updateEmpItem=function(editempadditem,idx)
     {
         EmpAddFactory.updateEmpAddItem(editempadditem,idx);
     }   
	
})
EmpServiceModule.service("ShiftService",function(ShiftFactory){
    this.getAllShiftTime=function(){
        return ShiftFactory.getShiftTime();
    },
    this.addAllShiftTime=function(shifttime){
      ShiftFactory.addShiftTime(shifttime);
    }
    this.deleteAllShiftTime=function(idx,shiftid)
    {
        ShiftFactory.deleteShiftTime(idx,shiftid);
    }
    this.updateAllShiftTime=function(editshifttime,idx){
        ShiftFactory.updateShiftTime(editshifttime,idx);
    }
    
})
EmpServiceModule.service("ShiftAssignService",function(ShiftAssignFactory){
	
	 this.getAllShiftAssignInformation=function(){
		 return ShiftAssignFactory.getShiftAssignInformation();
		}
})
EmpServiceModule.service("LeaveApplyService",function(LeaveApplyFactory){
    this.addAllLeaveItems=function(leave){
        return LeaveApplyFactory.getLeaveItems(leave);
		
    }
	 this.addAllapplyLeaveItem=function(leave){
        LeaveApplyFactory.addLeaveItem(leave);
    }
});
EmpServiceModule.service("AttendanceService",function(AttendanceFactory){
    this.getAllEmp=function(){
        return AttendanceFactory.getAttend();
    }
   this.addAttends=function(attend){
       AttendanceFactory.addAttend(attend)
   }
});


