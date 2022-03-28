interface I{
    a:number;
  }
  class Emp
  {
    code:number;
    name:string;
    constructor(code:number, name:string)
    {
      this.code=code;
      this.name=name;
      console.log("Constructor");
    }
  }
  let obj=new Emp(100,"Neeti");
  class ENew extends Emp{
    age:number;
    constructor(code:number, name:string,age:number){
      super(code,name);
      this.age=age;
    }
  }
  let obj1=new ENew(100,"Neeti",34);