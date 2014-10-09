/**
 * Created by STEPHEN on 10/9/2014.
 */
'use strict'

describe('myControllerTest', function () {
    var createController, scope;

    beforeEach(module('myApp'));

    beforeEach(inject(function ($rootScope, $controller, $log) {
        scope = $rootScope.$new();
        createController = function(){
            return $controller('myController', {$scope: scope, $log: $log});
        }
    }));

    it('should set default font size to 100%', function () {
        var controller = createController();
        expect(scope.fontSize).toBe(100);
    });

    it('should increase the font size to 125', function(){
        var controller = createController();
        scope.increase();
        expect(scope.fontSize).toBe(125);
    });

    it('should decrease the font size to 75', function(){
        var controller = createController();
        scope.decrease();
        expect(scope.fontSize).toBe(80);
    });

    it('should reset the font size to 100', function(){
        var controller = createController();
        scope.increase();
        scope.increase();
        scope.increase();
        scope.reset();

        expect(scope.fontSize).toBe(100);
    });
})
