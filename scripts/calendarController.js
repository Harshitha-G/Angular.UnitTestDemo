/**
 * Created by STEPHEN on 10/10/2014.
 */
'use strict'

angular.module('myApp').controller('CalendarController', function ($scope, $log) {
    var weeks = [
        [],
        [],
        [],
        [],
        [],
        []
    ];
    $scope.today = new Date();
    $scope.currentDate = new Date();

    $scope.getCalendarDates = function () {
        var firstDate = getFirstCalendarDate($scope.currentDate.getFullYear(), $scope.currentDate.getMonth());
        var index = 0;

        for (var i = 0; i < weeks.length; i++) {
            for (var j = 0; j < 7; j++) {
                var days = (i * 7) + j;

                var date = new Date(firstDate);
                date.setDate(date.getDate() + days);
                //console.log(date);
                weeks[i][j] = date.toJSON();
            }
        }

        return weeks;
    }

    $scope.setToNextMonth = function () {
        console.log('setToNextMonth');
        $scope.currentDate.setDate($scope.currentDate.getDate() + 1);
    }

    $scope.setToPreviousMonth = function () {
        calendarMonth--;
    }

    $scope.isToday = function (date) {
        return new Date(date).toLocaleDateString() == $scope.today.toLocaleDateString();
    }

    var getFirstCalendarDate = function (year, month) {
        var firstDate = new Date(year, month, 1);
        var weekDay = firstDate.getDay();

        while (weekDay != 0) {
            firstDate.setDate(firstDate.getDate() - 1);
            weekDay = firstDate.getDay();
        }

        return firstDate;
    }
});