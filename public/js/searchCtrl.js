var myApp = angular.module('searchApp', ['angular-simple-sidebar']);

myApp.controller('searchCtrl', function($scope, $http) {
    $scope.ids = [];
    $scope.state = false;
    $scope.menuTitle = "menu";
    $scope.settings = {
        close: true,
        closeIcon: "fa fa-times"
    };
    $scope.items = [
        {
            name: "first item",
            link: "//google.com",
            icon: "fa fa-google",
            target: "_blank"
        },
        {
            name: "second item",
            link: "",
            icon: "",
            target: ""
        }
    ];
    $scope.theme = 'white';

    $http({
        method: 'GET',
        url: '/ids'
    }).then(function success(response) {
        $scope.ids = response.data;
    }, function error(response) {
        console.log(response);
    });

    $scope.searchClass = function() {
        console.log('in searchclass');
        $http.get('/className', $scope.className).
        success(function(data) {
            console.log("posted successfully");
        }).error(function(data) {
            console.error("error in posting");
        });
    }

});