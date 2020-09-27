function count() {
    
var i = 2;
var msg = ''; 
    
var numbers = document.getElementById('count');
    
//while(i<=10){
//    msg = msg + i + " ";
//    i++;
    for(i=1;i<=6;i++){
        msg = msg + i * 2 + " ";
    }
    
numbers.textContent= msg ;
    
}