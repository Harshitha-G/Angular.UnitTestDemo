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

    it('should return correct array of dates', function () {
        var controller = createController();
        expect(scope.getCalendarDates).toBeDefined();

        var weeks = scope.getCalendarDates(2014, 10);
        expect(weeks[0][0].toString()).toBe(new Date(2014, 8, 28).toJSON());
        expect(weeks[5][6].toString()).toBe(new Date(2014, 10, 8).toJSON());
    });




})
