var app = angular.module('wpApp', ['ngSanitize']);

app.factory('WordpressData', function($http) {
    var WPFactory = {
        listData: function(callback) {
            $http.get('http://localhost:8000/wp-json/wp/v2/posts/').then(callback);
        }
    }
    return WPFactory
});

app.controller('DataController', ['$scope', 'WordpressData', function($scope, WordpressData) {
    WordpressData.listData((response) => {
        $scope.posts = response.data;
        console.log('home data', $scope.posts);
    });
}]);