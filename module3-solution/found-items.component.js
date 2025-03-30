(function () {
    'use strict';

    angular.module('NarrowItDownApp')
    .component('foundItems', {
        templateUrl: 'found-items.html',
        bindings: {
            items: '<',
            onRemove: '&'
        }
    });
})();
