interface F1{
    fname:string;
    getname():string;

}
class x implements F1{
    fname:string;
    getname():string{
        return this.fname;
    }
    constructor() {
        this.fname="mohit";
    }
}
let some={
    firstname:"test"
    //getfullname:()=>"test";
};
let var1:F1=new x();
console.log(var1.fname);
//var1=some;
//console.log(var1.fname);