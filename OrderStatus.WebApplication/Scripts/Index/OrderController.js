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
        debugger;
        switch (objectToChange.Status) {
            case 0:
                var index = $scope.NewOrders.indexOf(objectToChange);
                debugger;
                $scope.NewOrders.splice(index, 1);
                break;
            case 1:
                var index = $scope.ActiveOrders.indexOf(objectToChange);
                debugger;
                $scope.ActiveOrders.splice(index, 1);
                break;
            case 2:
                var index = $scope.CompletedOrders.indexOf(objectToChange);
                debugger;
                $scope.CompletedOrders.splice(index, 1);
                break;
            default:

        }
        debugger;
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
                //$scope.ActiveOrders.splice(index, 1);
                break;
            default:

        }

        debugger
        //for (var index = 0; index < $scope.ActiveOrders.length; index++) {
        //    if ($scope.ActiveOrders[index].ID === itemId) {
        //        switch (target) {
        //            case "CompletedOrders":
        //                $scope.CompletedOrders.push($scope.ActiveOrders[index]);
        //                $scope.ActiveOrders.splice(index, 1);
        //                break;
        //            case "NewOrders":
        //                break;
        //            case "ActiveOrders":
        //                break;
        //            default:

        //        }
        //    }
        //    debugger;
        //}
        //for (var index = 0; index < $scope.items.length; index++) {

        //    var item = $scope.items[index];

        //    if (item.id == id) {
        //        // add to dropped array
        //        $scope.dropped.push(item);

        //        // remove from items array
        //        $scope.items.splice(index, 1);
        //    }
        //}

        $scope.$apply();
    };

}]);