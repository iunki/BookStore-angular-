angular.module("BookStore").factory("Category", function BookFactory($localStorage) {
    return {
        all: function () {
            var categories = [];
            for (var i = 0; i < $localStorage.books.length; i++) {
                categories.push($localStorage.books[i].genre);
            }
            categories.sort();
            var a = categories.length;
            while (a--) {
                if (categories[a] == categories[a - 1]) {
                    categories.splice(a, 1);
                }
            }
            return categories;
        }
    }
});