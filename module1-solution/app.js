(function() {
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', ['$scope', function($scope) {
        $scope.lunchItems = "";
        $scope.message = "";
        $scope.messageColor = "";

        $scope.checkLunch = function() {
            if (!$scope.lunchItems.trim()) {
                $scope.message = "Please enter data first";
                $scope.messageColor = "red";
                return;
            }

            let items = $scope.lunchItems.split(',').filter(item => item.trim() !== "");
            
            if (items.length === 0) {
                $scope.message = "Please enter data first";
                $scope.messageColor = "red";
            } else if (items.length <= 3) {
                $scope.message = "Enjoy!";
                $scope.messageColor = "green";
            } else {
                $scope.message = "Too much!";
                $scope.messageColor = "green";
            }
        };
    }]);
})();
