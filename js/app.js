angular.module('BookStore', ['ngRoute', 'ngStorage'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/books', {
                templateUrl: 'templates/pages/books/index.html', 
                controller: 'BooksIndexController',
                controllerAs: 'ctrl'
            })
            .when('/books/:id', {
                templateUrl: 'templates/pages/books/show.html',
                controller: 'BooksShowController',
                controllerAs: 'ctrl'
            })
            .when('/', {
                redirectTo: '/books'
            })
            .otherwise({
                redirectTo: '/books'
            });
    }]);
