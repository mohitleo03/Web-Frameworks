var a = /** @class */ (function () {
    function a() {
    }
    return a;
}());
var b = /** @class */ (function () {
    function b() {
    }
    b.prototype.show = function () {
        console.log("hello");
    };
    return b;
}());
var a1 = new b();
a1.show();
