/**
 * Created by STEPHEN on 10/8/2014.
 */
'use strict'

var app = angular.module('myApp', []);

app.controller('myController', function ($scope, $log) {
    $scope.fontSize = 100;

    $scope.increase = function () {
        $scope.fontSize = $scope.fontSize * 1.25;
        $log.info($scope.fontSize);
    }

    $scope.decrease = function () {
        $scope.fontSize = $scope.fontSize * 0.8;
        $log.info($scope.fontSize);
    }

    $scope.reset = function(){
        $scope.fontSize = 100;
    }
});