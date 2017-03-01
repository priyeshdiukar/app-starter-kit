var App = (function() {
    var initialize = function() {
        console.log("App Starter Kit!");
    };

    var _testESLint = function() {
        var a = 2;
        return a * b;
    };

    return {
        initialize: initialize
    };
})();

App.initialize();
