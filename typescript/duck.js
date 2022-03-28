var x = /** @class */ (function () {
    function x() {
        this.fname = "mohit";
    }
    x.prototype.getname = function () {
        return this.fname;
    };
    return x;
}());
var some = {
    firstname: "test"
    //getfullname:()=>"test";
};
var var1 = new x();
console.log(var1.fname);
//var1=some;
//console.log(var1.fname);
