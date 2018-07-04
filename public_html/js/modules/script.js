var app=angular.module("payroll",["ui.router","EmpCtrlAddMastersModule","ui.bootstrap","angularMoment",'angularUtils.directives.dirPagination','gridster'])
app.config(["$stateProvider","$urlRouterProvider",function(r,t){
	 
	 t.otherwise("/dashboard");
    r.state("login",{url:"/login",templateUrl:"partials/login.html"});
    r.state("dashboard",{url:"/dashboard",templateUrl:"partials/master/dashboard.html"})
	 r.state("department",{url:"/department",templateUrl:"partials/master/departments.html"})
                
      r.state("designation",{url:"/designation",templateUrl:"partials/master/designations.html"})

      r.state("leave",{url:"/leave",templateUrl:"partials/master/leavetypes.html"})
                
     r.state("shift",{url:"/shift",templateUrl:"partials/master/shifts.html"})

     r.state("employee",{url:"/employee",templateUrl:"partials/master/Employee Adding.html"})
	 r.state("shiftchange",{url:"/shiftchange",templateUrl:"partials/Shift and Attendense/shiftchange.html"})
	r.state("Attendense",{url:"/Attendense",templateUrl:"partials/Shift and Attendense/attendense.html"})
	r.state("applyleave",{url:"/applyleave",templateUrl:"partials/leaves/applyleave.html"})
	r.state("leavehistory",				{url:"/leavehistory",templateUrl:"partials/leaves/leavehistroy.html"})
    r.state("pay",{url:"/pay",templateUrl:"partials/payslip/pay.html"})
}]);