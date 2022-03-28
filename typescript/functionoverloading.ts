/*function add(a:number,b:number):number{
    return a+b;
}
function add(a:string,b:string):string{
    return a+b;
}
console.log(add(2,3));
console.log(add("a","b"));*/
/*correct code*/
function add(a:string, b:string):string;

function add(a:number, b:number): number;

function add(a: any, b:any): any {
    return a + b;
}
console.log(add("Hello ", "Steve"));
console.log(add(10, 20));