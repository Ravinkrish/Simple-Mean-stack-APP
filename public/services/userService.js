webapp.factory('userServices',function($http){
   var postAllRegisterDetails = function(data)
        {
           return $http.post('/userRegistration', data);
        };

   var postAllLoginDetails = function(data)
        {
            console.log("testing:::::", data)
           return $http.post('/login', data);
        };
   var postEmployeedetails=function(data)
           {
              return $http.post('/routeDetails',data);
           }
  var getAllEmployeeDetails = function()
       {
           return $http.get('/allRouteDetails');
       }
  var deleteEmployee=function(employeeId)
        {
           return $http.delete('/employeeBymongoId/'+employeeId);
        }
  var getSingleEmployeeDetail=function(employeeId)
             {
                return $http.get('/singleemployeeBymongoId/'+employeeId);
             }
  var updateEmployeeDetails=function(editdata)
           {
              return $http.post('/editEmployeeBymongoId',editdata);
           }
   var getAllMapDetails = function()
       {
           return $http.get('/allMapDetails');
       }
   var deleteMap=function(mapId)
                {
                   return $http.delete('/mapBymongoId/'+mapId);
                }
   var getSingleroute=function(routeId)
                {
                   return $http.get('/mapBymongoId/'+routeId);
                }
   var updaterouteDetails=function(editdata)
              {
                 return $http.post('/editmapBymongoId',editdata);
              }
    var getAllGitHubUsers = function()
          {
              return $http.get('https://api.github.com/search/users?q=tom+repos:%3E42+followers:%3E1000');
          }


   return   {
             postAllRegisterDetails: postAllRegisterDetails,
             postAllLoginDetails: postAllLoginDetails,
             postEmployeedetails: postEmployeedetails,
             getAllEmployeeDetails: getAllEmployeeDetails,
             deleteEmployee: deleteEmployee,
             getSingleEmployeeDetail: getSingleEmployeeDetail,
             updateEmployeeDetails: updateEmployeeDetails,
             getAllMapDetails:getAllMapDetails,
             deleteMap: deleteMap,
             getSingleroute: getSingleroute,
             updaterouteDetails: updaterouteDetails,
             getAllGitHubUsers:getAllGitHubUsers
            }

   });
