(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService);

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var ctrl = this;
        ctrl.searchTerm = "";
        ctrl.found = [];

        ctrl.narrowItDown = function () {
            if (!ctrl.searchTerm) {
                ctrl.found = [];
                return;
            }

            MenuSearchService.getMatchedMenuItems(ctrl.searchTerm)
                .then(function (items) {
                    ctrl.found = items;
                });
        };

        ctrl.removeItem = function (index) {
            ctrl.found.splice(index, 1);
        };
    }
})();
