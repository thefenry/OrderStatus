app.controller('OrderController', ['$scope', '$http', function ($scope, $http) {

    var dataResponse;
    $http.get('http://www.orderstatusapi.com/Api/orders?type=json')
         .success(function (data) {
             $scope.Orders = data;
         })
         .error(function (data) {
             dataResponse = data;
         });
}]);