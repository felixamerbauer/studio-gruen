'use strict';

/* Controllers */
var controllers = angular.module('controllers', []);

controllers.controller('MenuCtrl', ['$scope', '$http', 'myService',
    function ($scope, $http, myService) {
        console.log("MenuCtrl");
        $scope.categories = myService.categories;
        $scope.pictures = [
            'img/Baby_01-Neugeborenenfotografie-Wien.jpg',
            'img/Baby_04-Neugeborenenfotografie-Stillen-Wien.jpg',
            'img/Familie_01-Familienfotografie-Natur-Mostviertel.jpg',
            'img/Portrait_03-Garten-Eier-Selbstversorgung-Niederoesterreich.jpg',
            'img_static/Schwangerschaft_13-Babybauch-Natur-Wien.jpg'];
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