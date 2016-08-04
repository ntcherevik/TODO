angular.
module('todoApp').
component('editForm', {
    templateUrl: 'edit-form/edit-form.template.html',
    controller: function TodoListController($scope, $location, $routeParams, Item) {
        var item = Item.get({id: $routeParams.id}, function(resource, headers) {
            $scope.item = item.item;
            $scope.date = new Date(item.date);
        });

        $scope.saveItem = function() {
            Item.save({
                id: $routeParams.id,
                item: $scope.item,
                date: $scope.date
            }, function(resource, headers) {
                $location.path('/list');
            });
        }
    }
});
