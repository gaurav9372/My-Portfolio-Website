function dateandtime() {

var today = new Date();
    
    
var x = today.toLocaleDateString();    
//var date = today.getDate();
//var month = today.getMonth();
//var year = today.getFullYear();

var xd = document.getElementById('date');
xd.textContent = x; ;

}
//if else condition

//var xd = document.getElementById('date');
//    var x = 30;
//
//    if (x < 50) {
//
//        xd.textContent = "less than 50";
//
//    } else {
//        xd.textContent = "greater than 50";
//    }