var x:String[]= ["abc","xyz"];                  //normal array
console.log(x[1]);
console.log(x);
var y:[String,number]=["mohit",179];            //tuple the order is must a string followed by a number
console.log(y[0]);
console.log(y[1]);
console.log(y);
var z:(string | number)[]=["manish","namit",173,179];     //array in tuple in here no order is mandatory
console.log(z[0]);
console.log(z[3]);
console.log(z[1]);
console.log(z[2]);
console.log(z);
var row=[];     
row[0]=1;
row[1]=2;
row[2]=3;
console.log(row[0]);
console.log(row[1]);
console.log(row[2]);
console.log(row);
enum Color{white=1,black=2,red=3,green=4} //so here color is a user defined datatype
let c:Color = Color.black;
console.log(c);
function test1(a:(string|number)[]):void{
    for(var i=0;i<a.length;i++)
    {
        console.log(a[i]);
    }
}
test1(z);