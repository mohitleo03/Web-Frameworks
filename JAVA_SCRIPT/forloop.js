var a=[1,2,3,4,5,6,7,8,9];
function fun(n){
    return n%2==0?"even <br>":"odd <br>";
}
//for loop to traverse an object
for(var key in a){
    document.write(fun(a[key]));
}
//foreach loop to traverse an object
a.forEach(fun1);
function fun1(n){
    if(n%2==0)
    {
        document.write("even <br>");
    }
    else{
        document.write("odd <br>");
    }
}
//function expression style (anonymous style)
var x = function(){
    const m= parseInt(prompt("enter 1st number"));
    const n= parseInt(prompt("enter 2nd number"));
    return(m+n);
}
document.write(x()+"<br>");
//arrow method
var product = (x,y)=>{
    document.write("the product is "+x*y+"<br>");
    return x*y;
}
const l= parseInt(prompt("enter 1st number"));
const z= parseInt(prompt("enter 2nd number"));
product(l,z);
//closure
function closure(q){
    return function(p){
        return q-p;
    }
}
var cl1=closure(2);
var cl2=closure(3);
document.write(cl1(1)+"<br>");
document.write(cl2(4)+"<br>");