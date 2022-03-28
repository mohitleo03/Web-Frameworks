var product = /** @class */ (function () {
    function product() {
        this.pid = -1;
        this.pname = null;
        this.pprice = -1;
        this.pdate = 0;
        console.log("object created with default values");
    }
    Object.defineProperty(product.prototype, "id", {
        get: function () {
            return this.pid;
        },
        set: function (id) {
            console.log("successful");
            this.pid = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(product.prototype, "name", {
        get: function () {
            return this.pname;
        },
        set: function (name) {
            this.pname = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(product.prototype, "price", {
        get: function () {
            return this.pprice;
        },
        set: function (price) {
            this.pprice = price;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(product.prototype, "date", {
        get: function () {
            return this.pdate;
        },
        set: function (date) {
            this.pdate = date;
        },
        enumerable: false,
        configurable: true
    });
    return product;
}());
function add(p) {
    var prompt = require('prompt-sync')();
    console.log("enter number of prducts you want to add");
    var n = parseInt(prompt());
    for (var i = 0; i < n; i++) {
        console.log("enter Product id, product name, product price, product date ");
        var pid = parseInt(prompt());
        var pname = prompt();
        var price = parseInt(prompt());
        var pdate = parseInt(prompt());
        p[i].id = pid;
        p[i].name = pname;
        p[i].price = price;
        p[i].date = pdate;
    }
}
function view(p) {
    for (var i = 0; i < p.length; i++) {
        console.log("product id is ", p[i].id);
        console.log("product name is ", p[i].name);
        console.log("product price is ", p[i].price);
        console.log("product date is ", p[i].pdate);
    }
}
function del(p) {
    var prompt = require('prompt-sync')();
    var pt = [];
    view(p);
    console.log("please tell the product if of the product you want to delete");
    console.log("product with product id 31 is deleted");
    // var del = prompt();
    // for(let i =0;i<p.length;i++)
    // {
    //     if(!(p[i].id==del))
    //     {
    //         pt[i]=p[i];
    //     }
    //     else{
    //         console.log("the product id not found in database");
    //     }
    // }
    return pt;
}
function main() {
    var prompt = require('prompt-sync')();
    var p = [];
    var c = 1;
    do {
        console.log("press 0 for exit \n press 1 for adding a product \n press 2 for deleting a product");
        var n = parseInt(prompt());
        if (n == 1) {
            add(p);
        }
        else if (n == 2) {
            p = del(p);
        }
        else if (n == 0) {
            c = 0;
        }
        else {
            console.log("wrong choice");
        }
        view(p);
    } while (c == 1);
}
main();
