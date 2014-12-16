'use strict';

/* Controllers */

var controllers = angular.module('controllers', []);

controllers.controller('DummyCtrl', ['$scope', '$http',
    function ($scope, $http) {
    }]);

controllers.controller('CarouselCtrl', ['$scope', '$routeParams',
        function ($scope, $routeParams) {
            // console.log("imagedata " + MathService.multiply(3, 2));
            $scope.imgId = $routeParams.imgId;
        }]
);
