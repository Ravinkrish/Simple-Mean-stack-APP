webapp.controller('githubController', ['$scope','userServices','$state', function($scope,userServices,$state) {

$scope.getAllGitHubUsers = function ()
             {
                      userServices.getAllGitHubUsers().then(function (res)
                      {
                         $scope.gitHubList = res.data.items;
                      });
             };




$scope.getAllGitHubUsers();
}]);