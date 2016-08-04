angular.
module('todoApp').
component('addForm', {
    templateUrl: 'add-form/add-form.template.html',
    controller: function TodoListController($scope, $location, Item) {
        $scope.createItem = function() {
            Item.save({
                item: $scope.item,
                date: $scope.date
            }, function(resource, headers) {
                $location.path('/list');
            });
        }
    }
});
