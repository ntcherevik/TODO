angular.
module('todoServices', ['ngResource']).
factory('Item', function($resource) {
    return $resource('/api/items/:id', {id: '@id'});
});
