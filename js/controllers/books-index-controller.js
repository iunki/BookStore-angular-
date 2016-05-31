angular.module('BookStore').controller('BooksIndexController', function ($scope, $localStorage, Book, Category) {
    var controller = this;
    Book.all().success(function (data) {
        controller.books = data;
        $localStorage.books = data;
    });

    $scope.sort = '';
    $scope.setSort = function (cat) {
        $scope.sort = cat;
        console.log($scope.sort + ', ' + cat);
    };

    $scope.categories = Category.all();

    $scope.reviewCount = function (book) {
        return book.reviews.length;
    };
    $scope.avgStars = function (book) {
        var sum = 0;
        for (i = 0; i < book.reviews.length; i++) {
            sum += book.reviews[i].stars;
        }
        return sum / book.reviews.length;
    };


    //window.localStorage.setItem('books', JSON.stringify(books));
    //controller.books = JSON.parse(window.localStorage.getItem('books'));

});
