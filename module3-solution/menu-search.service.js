(function () {
    'use strict';

    angular.module('NarrowItDownApp')
    .service('MenuSearchService', MenuSearchService);

    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http) {
        var service = this;

        service.getMatchedMenuItems = function (searchTerm) {
            return $http.get('https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json')
                .then(function (response) {
                    var allItems = response.data.menu_items;
                    var foundItems = [];

                    for (var i = 0; i < allItems.length; i++) {
                        if (allItems[i].description.toLowerCase().includes(searchTerm.toLowerCase())) {
                            foundItems.push(allItems[i]);
                        }
                    }

                    return foundItems;
                });
        };
    }
})();
