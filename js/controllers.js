'use strict';

/* Controllers */
var controllers = angular.module('controllers', []);

controllers.controller('MenuCtrl', ['$scope', '$http', 'myService',
    function ($scope, $http, myService) {
        // console.log("MenuCtrl");
        $scope.categories = myService.getCategories();
    }]);

controllers.controller('DummyCtrl', [,
    function () {
    }]);

controllers.controller('CarouselCtrl', ['$scope', '$routeParams', 'myService',
        function ($scope, $routeParams, myService) {
            // console.log("CarouselCtrl");
            $scope.pictures = myService.getData()[$routeParams.imgId];
        }]
);
