window.addEventListener("load",bindEvents);
function bindEvents(){
    document.querySelector('#load').addEventListener('click',loadRecords);
    document.querySelector('#save').addEventListener('click',saveRecords);
    document.querySelector('#sort').addEventListener('click',sortByPrice);
    document.querySelector('#update').addEventListener('click',updateRecord);
    document.querySelector('#add').addEventListener('click',addRecord);
    document.querySelector('#remove').addEventListener('click',deleteRecords);
    document.querySelector('#searchTxt').addEventListener('change',search);
    document.querySelector('search').addEventListener('click',showHideSearchBar);
}
function addRecord(){
    var item = new Item();
    for(let key in item){
        iten[key]=document.querySelector('#'+key).value;
    }
    itemOpertaions.add(item);
    printRecord(item);
    console.log('item Object is ',item);
    console.log("total Records",count);
}
function printRecord(item){
    var tbody = document.querySelector('#items');
    var tr = tbody.isnertRow();
    var index = 0;
    for(let key in item){
        let cell = tr.insertCell(index);
        cellinnerText = item[key];
        index++;
    }
    var lastTD = tr.insertCell(index);
    lastTD.appendChild(createIcon('fas fa-trash mr-2',trash,item.id));
    lastTD.appendChild(createIcon('fas fa-edit',edit,item.id));
}
function createIcon(className,fn,id){
    // <i class="fas fa-edit"></i>
    // <i class="fas fa-trash"></i>
    var iTag=document.createElement("i");
    iTag.className = className;
    iTag.addEventListener('click',fn);
    iTag.setAttribute("data-itemid",id);
    return iTag;
}
function showTotal(){
    document.querySelector('#total').innerText = itemOpertaions.items.length;
    document.querySelector('#mark').innerText = itemOpertaions.countTotalMark();
    document.querySelector('unmark').innerText = itemOpertaions.items.lenght - itemOpertaions.countTotalMark();
}
function trash(){
    let id=this.getAttribute('data-itemid');
    itemOpertaions.markUnmark(id);
    showTotal();
    let tr = this.parentNode.parentNode;
    /*
    if(tr.className){
        tr.className='';
    }
    else{
        tr.className='alert-danger';
    }
    */
   tr.classList.toggle('alert-danger');
   console.log("I am Trash",this.getAttribute('data-itemid'));
}
function deleteRecords(){
    var items = itemOpertaions.remove();
    printTable(items);
}
function printTable(items){
    var tbody = document.querySelector('#items');
    tbody.innerHTML ='';
    items.forEach(item=>printRecord(item));
    showTotal();
}
function search(){
    var val = document.querySelector('#searchTxt').value;
    var key = document.querySelector('Searchby').value;
    var items = itemOpertaions.searchAll(key,val);
    printTable(items);
}
var itemObject;
function edit(){
    var id = this.getAttribute('data-itemid');
    itemObject=itemOpertaions.search(id);
    fillFields();
    console.log("i am Edit ",this.getAttribute('data-itemid'));
}
function fillFields(){
    for(let key in itemObject){
        if(key=='isMarked'){
            continue;
        }
        document.querySelector('#'+key).value = itemObject[key];
    }
}
function updateRecord(){
    for(let key in itemObject){
        if(key=='isMarked'){
            continue;
        }
        itemObject[key] = document.querySelector('#'+key).value;
    }
    printTable(itemOpertaions.items);
}
function sortByPrice(){
    const sortByPrice=()=>printTable(itemOpertaions.sortByPrice());
}
function saveRecords(){
    if(localStorage){
        localStorage.myitems = JSON.stringify(itemOpertaions.items);
        alert("data store...")
    }
    else{
        alert("No local storage feature is supported in ur browser...")
    }
}
function loadRecords(){
    if(localStorage){
        if(localStorage.myitems){
            itemOpertaions.items = KSON.parse(localStorage.myitems);
            printTable(itemOpertaions.items);
        }
        else{
            alert("No data to load");
        }
    }
    else{
        alert("No local storage feature is supported in ur browser...")
    }
}
const showHideSearchBar = ()=>document.querySelector('#searchbar').classList.toggle('hide');
function init()
{
    showTotal();
    bindEvents();
    showHideSearchBar();
}