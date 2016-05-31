angular.module('BookStore').controller('BooksShowController', function ($scope, $routeParams, Book) {
    $scope.book = Book.book($routeParams.id);

    /*var controller = this;
     Book.book($routeParams.id).success(function (data) {
     controller.book = data;
     });*/

    $scope.removeComment = function(review){
        Book.removeReview($scope.book, review);
    };

});

angular.module('BookStore').controller('TabsController', function ($scope) {
    $scope.tab = 1;
    $scope.selectTab = function (setTab) {
        $scope.tab = setTab;
    };
    $scope.isSelected = function (checkTab) {
        return $scope.tab === checkTab;
    }
});

angular.module('BookStore').controller('ReviewController', function ($scope, Book) {
    $scope.review = {};

    $scope.addReview = function (book) {
        Book.addReview(book, $scope.review);
        $scope.review = {};
    };

    /*$scope.addReview = function (book) {
        Book.addReview(book, $scope.review).success(function () {
            $scope.review = {};
        })
    };*/
});
