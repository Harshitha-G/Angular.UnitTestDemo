/**
 * Created by STEPHEN on 10/9/2014.
 */
'use strict'

describe('calendarControllerTest', function () {
    var createController, scope;

    beforeEach(module('myApp'));

    beforeEach(inject(function ($rootScope, $controller, $log) {
        scope = $rootScope.$new();
        createController = function () {
            return $controller('CalendarController', {$scope: scope, $log: $log});
        }
    }));

//    it('should return the first calendar date', function(){
//        var controller = createController();
//        expect(controller.getFirstCalendarDate).toBeDefined();
//        expect(controller.getFirstCalendarDate(2014, 10).toString()).toBe(new Date(2014,8,28).toString());
//        expect(controller.getFirstCalendarDate(2014, 9).toString()).toBe(new Date(2014,7,31).toString());
//    })
//
//    it('should return the last calendar date', function(){
//        var controller = createController();
//        expect(controller.getLastCalendarDate).toBeDefined();
//        expect(controller.getLastCalendarDate(2014, 10).toString()).toBe(new Date(2014,10,1).toString());
//        expect(controller.getLastCalendarDate(2014, 11).toString()).toBe(new Date(2014,11,6).toString());
//    })

    it('should return correct array of dates', function () {
        var controller = createController();
        expect(scope.getCalendarDates).toBeDefined();

        var dates = scope.getCalendarDates(2014, 10);
        expect(dates.length).toBe(35);
        expect(dates[0].toString()).toBe(new Date(2014, 8, 28).toString());
        expect(dates[dates.length-1].toString()).toBe(new Date(2014, 10, 1).toString());
    });


})
