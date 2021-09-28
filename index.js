var countEl=document.getElementById("count-id")
let plus=0;
function increase(){
   plus+=1
    countEl.innerText=plus;
}

var saveValue=document.getElementById("save-el")
 
function save(){
    
    var storeVariable=" "+plus+" - "
   saveValue.textContent+=storeVariable
   countEl.textContent="0"
   plus=0
   
 
}
function refresh(){
    location.reload();
}