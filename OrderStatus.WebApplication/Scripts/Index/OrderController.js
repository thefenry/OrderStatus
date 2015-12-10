app.controller('OrderController', ['$scope', '$http', function ($scope, $http) {

    var dataResponse;
    $scope.NewOrders = [];
    $scope.ActiveOrders = [];
    $scope.CompletedOrders = [];
    $http.get('http://www.orderstatusapi.com/Api/orders?type=json')
         .success(function (data) {
             dataResponse = data;
             SetTables();
         })
         .error(function (data) {
             dataResponse = data;
         });

    function SetTables() {
        dataResponse.forEach(function (order) {

            switch (order.Status) {
                case 0:
                    $scope.NewOrders.push(order);
                    break;
                case 1:
                    $scope.ActiveOrders.push(order);
                    break;
                case 2:
                    $scope.CompletedOrders.push(order);
                    break;
                default:
                    alert("Order does not have a valid status!")
                    break;
            }
        });

    }
}]);