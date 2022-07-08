window.addEventListener("load",bindEvent);
function bindEvent(){
    document.getElementById("calculate").addEventListener("click",cal_salary);
    console.log("Bind Event Called");
     
}

function cal_salary(){
    salaryOperations.setbasicSalary(parseInt(document.getElementById("basic").value)); 

    //console.log("Button Click");
    // var b,hra,ta,da,tax,gs,ns;
    // b=parseInt(document.getElementById("basic").value);
    // hra=b*0.3;
    // da=b*0.9;
    // ta=b*0.2;
    // gs = b+hra+da+ta;
    // tax=gs*0.1;
    // ns=gs-tax;
    document.getElementById("hra").innerText = salaryOperations.hra();
    document.getElementById("da").innerText  = salaryOperations.da();
    document.getElementById("ta").innerText  = salaryOperations.ta();
    document.getElementById("gs").innerText  = salaryOperations.gs();
    document.getElementById("tax").innerText  = salaryOperations.tax();
    document.getElementById("net").innerText  = salaryOperations.ns();

}