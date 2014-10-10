/**
 * Created by STEPHEN on 10/10/2014.
 */
'use strict'

angular.module('myApp').controller('CalendarController', function ($scope, $log) {

    $scope.getCalendarDates = function (year, month) {
        var dates = [];

        var firstCalendarDate = getFirstCalendarDate(year, month);
        var lastCalendarDate = getLastCalendarDate(year, month);
        dates.push(new Date(firstCalendarDate));

        while (firstCalendarDate < lastCalendarDate) {
            firstCalendarDate.setDate(firstCalendarDate.getDate() + 1);
            dates.push(new Date(firstCalendarDate));
        }

        return dates;
    }

    var getFirstCalendarDate = function (year, month) {
        var firstDate = new Date(year, month - 1, 1);
        var weekDay = firstDate.getDay();

        while (weekDay != 0) {
            firstDate.setDate(firstDate.getDate() - 1);
            weekDay = firstDate.getDay();
        }

        return firstDate;
    }

    var getLastCalendarDate = function (year, month) {
        var lastDate = new Date(year, month, 0);
        var weekDay = lastDate.getDay();

        while (weekDay != 6) {
            lastDate.setDate(lastDate.getDate() + 1);
            weekDay = lastDate.getDay();
        }

        return lastDate;
    }
});