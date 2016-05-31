/*LOCAL STORAGE*/
angular.module("BookStore").factory("Book", function BookFactory($http, $localStorage) {
    return {
        all: function () {
            return $http({method: 'GET', url: '/books.json'});
        },
        book: function (id) {
            return $localStorage.books[id - 1];
        },
        addReview: function (book, review) {
            for (var i = 0; i < $localStorage.books.length; i++) {
                if ($localStorage.books[i].id = book.id) {
                    $localStorage.books[i].reviews.push(review);
                    break;
                }
            }
        },
        removeReview: function (book, review) {
            var i = book.reviews.indexOf(review);
            book.reviews.splice(i, 1);
        }
    };
});


/*SERVER*/
angular.module("BookStore").factory("BookServer", function BookFactory($http) {
    return {
        all: function () {
            return $http({method: 'GET', url: '/books'});
        },
        book: function (id) {
            return $http({method: 'GET', url: '/books/' + $routeParams.id});
        },
        addReview: function (book, review) {
            return $http({
                method: 'POST',
                url: '/books/reviews/new',
                data: {"id": book.id, "review": review}
            });
        },
        removeReview: function (book, review) {
            return $http({
                method: 'POST',
                url: 'books/reviews/remove',
                data: {"bookId": book.id, "review": review}
            });
        }
    };
});
