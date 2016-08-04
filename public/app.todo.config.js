angular.
module('todoApp').
config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.
        when('/list', {
            template: '<todo-list></todo-list>'
        }).
        when('/add', {
            template: '<add-form></add-form>'
        }).
        otherwise('/list');
    }
]);