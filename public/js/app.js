var webapp = angular.module('webapp', ['ui.router','naif.base64','angularUtils.directives.dirPagination']);

   webapp.config(function($stateProvider, $urlRouterProvider) {

       $urlRouterProvider.otherwise('/githubUser');

       $stateProvider

       // HOME STATES AND NESTED VIEWS ========================================
           .state('register', {
               url: '/register',
               templateUrl: 'templates/register.html',
               controller:'registerController'
           })

           .state('githubUser', {
                  url: '/githubUser',
                  templateUrl: 'templates/githubUser.html',
                  controller:'githubController'
              })

           .state('employee', {
              url: '/employee',
              templateUrl: 'templates/employee.html',
              controller:'employeeController'
           })

           .state('employeeedit', {
             url: '/employeeedit/:employeeId',
             templateUrl: 'templates/employeeedit.html',
             controller:'employeeEditController'
           })

           .state('employeedetails', {
              url: '/employeedetails',
              templateUrl: 'templates/employeedetails.html',
              controller:'employeedetailcontroller'
           })

           .state('users', {
             url: '/users',
             templateUrl: 'templates/users.html',
             controller:'userCtrl'
           })

           .state('useredit', {
            url: '/useredit/:routeId',
            templateUrl: 'templates/useredit.html',
            controller:'userEditCtrl'
           })

           // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
           .state('login', {
               url: '/login',
               templateUrl: 'templates/login.html',
               controller:'loginController'

               // we'll get to this in a bit
           });

   });