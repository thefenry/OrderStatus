app.directive('draggable', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attributes, ctlr) {
            //element.attr("draggable", true);

            element.bind("dragstart", function (eventObject) {
                //eventObject.dataTransfer.setData("text/plain", eventObject.target.itemid);
                eventObject.dataTransfer.setData("text/plain", eventObject.currentTarget.getAttribute("itemid"));
                eventObject.dropEffect = "move";
                //debugger;
                //eventObject.originalEvent.dataTransfer.setData("text", attributes.itemid);
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
                //var data = eventObject.dataTransfer.getData("text");
                //debugger;
            });

            element.bind("drop", function (eventObject) {
                eventObject.preventDefault();
                var data = eventObject.dataTransfer.getData("text");
                var target = eventObject.target.getAttribute("container");
                debugger;
                scope.moveToGroup(parseInt(data), target);
                //scope.moveToGroup();
            });
        }
    };
})