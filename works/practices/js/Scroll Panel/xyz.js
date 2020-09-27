var text1 = document.getElementById('text1');
var text2 = document.getElementById('text2');
var text3 = document.getElementById('text3');
var text4 = document.getElementById('text4');
var text5 = document.getElementById('text5');
var text6 = document.getElementById('text6');
var text7 = document.getElementById('text7');

window.onscroll = function(){
    measure();
};

function measure(){
    
    var scroll_Top = document.body.scrollTop || document.documentElement.scrollTop;

    var cal_Height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    var scrolled = (scroll_Top / cal_Height) * 100;
    
    
    text1.textContent= document.documentElement.scrollHeight;
    text2.textContent= document.documentElement.clientHeight;
    text3.textContent= window.pageXOffset;
    text4.textContent= window.pageYOffset.toPrecision(4);
    text5.textContent= document.documentElement.scrollTop.toPrecision(4);
    
    text6.textContent= cal_Height;
    
    text7.textContent= scrolled.toPrecision(4);
    
}







    
    
    
