var ans,a;
function calcx() {
  a=1;
}
function calcy() {
  a=2;
}
function show() {
    x = parseInt(document.form1.x.value);
    y = parseInt(document.form1.y.value);
    if(a==1){
        ans = Math.pow(x, y);
    }
    if(a==2){
        ans = Math.pow(y,x);
    }
    document.form1.ans.value = ans;
}