//var acc = document.getElementById("Pbutton");
//
//var i;
//
//for (i = 0; i < acc.length; i++) {
//  acc[i].addEventListener("click", function() {
//    this.classList.toggle("active");
//    var panel = this.nextElementSibling;
//    if (panel.style.maxHeight) {
//      panel.style.maxHeight = null;
//    } else {
//      panel.style.maxHeight = panel.scrollHeight + "px";
//    } 
//  });
//}

var butt = document.getElementById("Pbutton");
var panel1 = document.getElementsByClassName("panel")[0];

butt.addEventListener("click", touch);

function touch() {
    if (panel1.style.width){
        panel1.style.width = null;
    }
    else{
  panel1.style.width = "150px";
    }
}
