'use strict';

/* Controllers */

var controllers = angular.module('controllers', []);

controllers.controller('DummyCtrl', ['$scope', '$http',
    function ($scope, $http) {
    }]);

controllers.controller('CarouselCtrl', ['$scope', '$routeParams',
        function ($scope, $routeParams) {
            var imageCategories = {
                'schwangerschaft': ['img/schwangerschaft1.png', 'img/schwangerschaft2.png', 'img/schwangerschaft3.png'],
                'baby': ['img/baby1.png', 'img/baby2.png', 'img/baby3.png']
            }
            // console.log("imagedata " + MathService.multiply(3, 2));
            $scope.pictures = imageCategories[$routeParams.imgId];
            // console.log("pictures " + $scope.pictures);
        }]
);
