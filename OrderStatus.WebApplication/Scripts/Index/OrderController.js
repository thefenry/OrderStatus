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

    $scope.moveToGroup = function (itemId, target) {
        var objectToChange;
        for (var i = 0; i < dataResponse.length; i++) {
            if (dataResponse[i].ID == itemId) {
                objectToChange = dataResponse[i];
                break;
            }
        }
        switch (objectToChange.Status) {
            case 0:
                var index = $scope.NewOrders.indexOf(objectToChange);
                $scope.NewOrders.splice(index, 1);
                break;
            case 1:
                var index = $scope.ActiveOrders.indexOf(objectToChange);
                $scope.ActiveOrders.splice(index, 1);
                break;
            case 2:
                var index = $scope.CompletedOrders.indexOf(objectToChange);
                $scope.CompletedOrders.splice(index, 1);
                break;
            default:

        }
        switch (target) {
            case "NewOrders":
                objectToChange.Status = 0
                $scope.NewOrders.push(objectToChange);
                break;
            case "ActiveOrders":
                objectToChange.Status = 1
                $scope.ActiveOrders.push(objectToChange);
                break;
            case "CompletedOrders":
                objectToChange.Status = 2
                $scope.CompletedOrders.push(objectToChange);
                break;
            default:

        }      

        $scope.$apply();
    };

}]);