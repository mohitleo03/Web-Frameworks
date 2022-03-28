function a(...names:string[]):void{
    for(var i=0;i<names.length;i++){
        console.log(names[i]);
    }
}
a("x");
a("ax","b","c");