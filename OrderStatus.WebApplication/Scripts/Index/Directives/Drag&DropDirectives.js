app.directive('draggable', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attributes, ctlr) {
            element.bind("dragstart", function (eventObject) {
                eventObject.dataTransfer.setData("text/plain", eventObject.currentTarget.getAttribute("itemid"));
                eventObject.dropEffect = "move";
            });

        }
    };
})

app.directive('dropTarget', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attributes, ctlr) {
            element.bind("dragover", function (eventObject) {
                eventObject.preventDefault();
            });

            element.bind("drop", function (eventObject) {
                eventObject.preventDefault();
                var data = eventObject.dataTransfer.getData("text");
                var target = eventObject.target.getAttribute("container");
                scope.moveToGroup(parseInt(data), target);
            });
        }
    };
})