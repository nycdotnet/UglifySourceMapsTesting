var SourceMapTesting;
(function (SourceMapTesting) {
    var Class1 = (function () {
        function Class1() {
        }
        Class1.GetClassNameStatic = function () {
            var namePart = "Class";
            var numberPart = 1;
            return namePart + numberPart;
        };
        return Class1;
    })();
    SourceMapTesting.Class1 = Class1;
})(SourceMapTesting || (SourceMapTesting = {}));
//# sourceMappingURL=ex3.js.map