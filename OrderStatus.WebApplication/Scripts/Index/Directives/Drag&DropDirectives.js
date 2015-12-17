app.directive('draggable', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attributes, ctlr) {
            //element.attr("draggable", true);

            //element.bind("dragstart", function (eventObject) {
            //    eventObject.originalEvent.dataTransfer.setData("text", attributes.itemid);
            //});

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
 
                //scope.moveToGroup(parseInt(eventObject.originalEvent.dataTransfer.getData("text")));
                scope.moveToGroup();
                eventObject.preventDefault();
            });
        }
    };
})