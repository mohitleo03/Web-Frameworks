class  product{
    pid:number;
    pname:string;
    pprice:number;
    pdate:number;
    constructor(){
        this.pid=-1;
        this.pname=null;
        this.pprice=-1;
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
function add(p:product[]):void{
    const prompt =require('prompt-sync')();
    console.log("enter number of prducts you want to add");
    var n=parseInt(prompt());
    for (let i = 0; i< n; i++) {
    console.log("enter Product id, product name, product price, product date ");
    var pid=parseInt(prompt());
    var pname=prompt();
    var price=parseInt(prompt());
    var pdate=parseInt(prompt());
    p[i].id = pid;
    p[i].name=pname;
    p[i].price=price;
    p[i].date=pdate;
    }
}
function view(p:product[]):void {
    for (let i = 0; i< p.length; i++) {
        console.log("product id is ",p[i].id);
        console.log("product name is ",p[i].name);
        console.log("product price is ",p[i].price);
        console.log("product date is ",p[i].pdate);
    }
}
function del(p:product[]):product[] {
        const prompt =require('prompt-sync')();
        var pt : product[] =[]; 
        view(p);
        console.log("please tell the product if of the product you want to delete");
        console.log("product with product id 31 is deleted");
        var del = prompt();
        for(let i =0;i<p.length;i++)
        {
            if(!(p[i].id==del))
            {
                pt[i]=p[i];
            }
            else{
                console.log("the product id not found in database");
            }
        }
        return pt;
}
function main() {
    const prompt =require('prompt-sync')();
    var p:product[] = [];
    var c = 1;
    do{
        console.log("press 0 for exit \n press 1 for adding a product \n press 2 for deleting a product");
        var n=parseInt(prompt());
        if(n==1){
            add(p);
        }
        else if(n==2){
            p=del(p);
        }
        else if(n==0)
        {
            c=0;
        }
        else {
            console.log("wrong choice");
        }
        view(p);
    }while(c==1);
}
main();