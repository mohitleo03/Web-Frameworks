interface Person{
    var salary:number,
    var name:string,
    getSalary:(number)=>number
    getName():string
}
var customer:Person={
    salary:1000
    name:"mohit"
    getSalary:number=>{return 1000;}
    getName:():string {return "hello";}
}
console.log(customer.salary)
console.log(customer.name)
console.log(customer.getSalary())
console.log(customer.getName())
/*
interface Person{

    sal:number,

    name:string,

   getsal:(number)=>number,

   getname:(string)=>string

   }

let customer:Person=

   {

     sal:1000,

     name:"Neeti",

     getsal:(sal):number=>{return sal;},

     getname:(name):string=>{

       return name;

     }

   }

   console.log(customer.name);

   console.log(customer.getname("aastha"));
*/