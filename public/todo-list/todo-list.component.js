angular.
module('todoApp').
component('todoList', {
    templateUrl: 'todo-list/todo-list.template.html',
    controller: function TodoListController($scope, $location, Item) {
        $scope.items = Item.query();
        $scope.itemClicked = function(item) {
            $location.path("/edit/" + item.id);
        }
    }
});
