'use strict';

/* Controllers */
var controllers = angular.module('controllers', []);

controllers.controller('MenuCtrl', ['$scope', '$http', 'myService',
    function ($scope, $http, myService) {
        // console.log("MenuCtrl");
        $scope.categories = myService.categories;
    }]);

controllers.controller('DummyCtrl', [,
    function () {
    }]);

controllers.controller('CarouselCtrl', ['$scope', '$routeParams', 'myService',
        function ($scope, $routeParams, myService) {
            // console.log("CarouselCtrl");
            $scope.pictures = myService.imageCategories[$routeParams.imgId];
        }]
);

controllers.controller('LangCtrl', function ($scope, $translate) {
    $scope.changeLang = function (key) {
        $translate.use(key).then(function (key) {
            console.log("Sprache zu " + key + " gewechselt.");
        }, function (key) {
            console.log("Irgendwas lief schief.");
        });
    };
});