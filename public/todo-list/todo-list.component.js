angular.
module('todoApp').
component('todoList', {
    templateUrl: 'todo-list/todo-list.template.html',
    controller: function TodoListController($scope, Item) {
        $scope.items = Item.query();

        $scope.itemClicked = function(item) {
            console.log(item.id);
        }
    }
});
