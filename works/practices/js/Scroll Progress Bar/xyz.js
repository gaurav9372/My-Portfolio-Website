

window.onscroll = function(){
    coolness();
};

function coolness(){
    
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    var scrolled = (winScroll / height) * 100;

    document.getElementById("myBar").style.width = scrolled + "%";

    var evalue = document.getElementById("EValue");
    evalue.innerHTML = scrolled.toPrecision(4);
}

//
//

//    text1.textContent= document.documentElement.scrollTop;
//    text2.textContent= document.documentElement.clientHeight;
//    text3.textContent= document.documentElement.scrollHeight;
//    text4.textContent= height;
//    text5.textContent= scrolled.toPrecision(4);
//    text6.textContent= window.pageXOffset;
//    text7.textContent= window.pageYOffset;
//
//
//
//    
//    
//    
