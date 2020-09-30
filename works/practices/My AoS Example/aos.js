window.onscroll = function(){
    measure();
};

var welcome = document.getElementById("hello");

function measure(){
    
    
    var offset = document.getElementById("aos_offset");
    
    offset.innerHTML = window.pageYOffset.toPrecision(4);

    
if(window.pageYOffset >= 300){
        welcome.style.opacity = "1";
        welcome.style.animation = "500ms moveUP linear";
        
    } 
}







    
    
    
