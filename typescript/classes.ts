/*class  product{
    pid:number;
    pname:string;
    pprice:number;
    pdate:number;
    constructor(){
        this.pid=-1;
        this.pname=null;
        this.price=-1;
        this.pdate=0;
        console.log("object created with default values");
    }
    set id(id:number){
        console.log("successful");
        this.pid=id;
    }
    get id():number{
        return this.pid;
    }
    set name(name:string){
        this.pname=name;
    }
    get name():string{
        return this.pname;
    }
    set price(price:number){
        this.pprice=price;
    }
    get price():number{
        return this.pprice;
    }
    set date(date:number){
        this.pdate=date;
    }
    get date():number{
        return this.pdate;
    } 
}
function add(p:product){
    const prompt =require('prompt-sync')();
    console.log("enter Product id, product name, product price, product date ");
    var pid=parseInt(prompt());
    var pname=prompt();
    var price=parseInt(prompt());
    var pdate=parseInt(prompt());
    p.pid = pid;
    console.log(pid);
    p.pname=pname;
    p.pprice=price;
    p.pdate=pdate;
}
function view(p:product):void {
        console.log("product id is ",p.pid);
        console.log("product name is ",p.pname);
        console.log("product price is ",p.pprice);
        console.log("product date is ",p.pdate);
}
function main():void{
    product p=product;
    product p1=product;
    product p2=product;
    product p3=product;
    product p4=product;
    product p5=product;
    product p6=product;
    product p7=product;
    product p8=product;
    product p9=product;
    var prompt = require('prompt-sync')();
    console.log("how many objects you want to add?");
    var n=prompt();
        if(n==1){
            console.log("add #1 product");
            add(p);
        }
        if(n==2){
            console.log("add #1 product");
            add(p);
            console.log("add #2 product");
            add(p1);
        }
        if(n==3){
            console.log("add #1 product");
            add(p);
            console.log("add #2 product");
            add(p1);
            console.log("add #3 product");
            add(p2);
        }
        if(n==4){
            console.log("add #1 product");
            add(p);
            console.log("add #2 product");
            add(p1);
            console.log("add #3 product");
            add(p2);
            console.log("add #4 product");
            add(p3);
        }
        if(n==5){
            console.log("add #1 product");
            add(p);
            console.log("add #2 product");
            add(p1);
            console.log("add #3 product");
            add(p2);
            console.log("add #4 product");
            add(p3);
            console.log("add #5 product");
            add(p4);
        }
        if(n==6){
            console.log("add #1 product");
            add(p);
            console.log("add #2 product");
            add(p1);
            console.log("add #3 product");
            add(p2);
            console.log("add #4 product");
            add(p3);
            console.log("add #5 product");
            add(p4);
            console.log("add #6 product");
            add(p5);
        }
        if(n==7){
            console.log("add #1 product");
            add(p);
            console.log("add #2 product");
            add(p1);
            console.log("add #3 product");
            add(p2);
            console.log("add #4 product");
            add(p3);
            console.log("add #5 product");
            add(p4);
            console.log("add #6 product");
            add(p5);
            console.log("add #7 product");
            add(p6);
        }
        if(n==8){
            console.log("add #1 product");
            add(p);
            console.log("add #2 product");
            add(p1);
            console.log("add #3 product");
            add(p2);
            console.log("add #4 product");
            add(p3);
            console.log("add #5 product");
            add(p4);
            console.log("add #6 product");
            add(p5);
            console.log("add #7 product");
            add(p6);
            console.log("add #8 product");
            add(p7);
        }
        if(n==9){
            console.log("add #1 product");
            add(p);
            console.log("add #2 product");
            add(p1);
            console.log("add #3 product");
            add(p2);
            console.log("add #4 product");
            add(p3);
            console.log("add #5 product");
            add(p4);
            console.log("add #6 product");
            add(p5);
            console.log("add #7 product");
            add(p6);
            console.log("add #8 product");
            add(p7);
            console.log("add #9 product");
            add(p8);
        }
        if(n==10){
            console.log("add #1 product");
            add(p);
            console.log("add #2 product");
            add(p1);
            console.log("add #3 product");
            add(p2);
            console.log("add #4 product");
            add(p3);
            console.log("add #5 product");
            add(p4);
            console.log("add #6 product");
            add(p5);
            console.log("add #7 product");
            add(p6);
            console.log("add #8 product");
            add(p7);
            console.log("add #9 product");
            add(p8);
            console.log("add #10 product");
            add(p9);
        }
    if(n==1){
        view(p);
    }
    if(n==2){
        view(p);
        view(p1);
    }
    if(n==3){
        view(p);
        view(p1);
        view(p2);
    }
    if(n==4){
        view(p);
        view(p1);
        view(p2);
        view(p3);
    }
    if(n==5){
        view(p);
        view(p1);
        view(p2);
        view(p3);
        view(p4);
    }
    if(n==6){
        view(p);
        view(p1);
        view(p2);
        view(p3);
        view(p4);
        view(p5);
    }
    if(n==7){
        view(p);
        view(p1);
        view(p2);
        view(p3);
        view(p4);
        view(p5);
        view(p6);
    }
    if(n==8){
        view(p);
        view(p1);
        view(p2);
        view(p3);
        view(p4);
        view(p5);
        view(p6);
        view(p7);
    }
    if(n==9){
        view(p);
        view(p1);
        view(p2);
        view(p3);
        view(p4);
        view(p5);
        view(p6);
        view(p7);
        view(p8);
    }
    if(n==10){
        view(p);
        view(p1);
        view(p2);
        view(p3);
        view(p4);
        view(p5);
        view(p6);
        view(p7);
        view(p8);
        view(p9);
    }
}
main();*/