$(document).ready(function(){
    
//Setting Defaults
$("#showBlock").next().hide();
$("#show500Block").next().hide();
    
$("#toggleBlock").next().hide();
$("#toggle500Block").next().hide();
    
$("#fadeInBlock").next().hide();
$("#fadeToggleBlock").next().hide();
    
$("#slideDownBlock").next().hide();
$("#slideToggleBlock").next().hide();

$("#animateBlock").next().show();
$(".panel").next().show();
$($("#delayBlock")).next().show();
$($("#finishBlock")).next().show();
    
//show()
$("#showBlock").click(function(){ 
    $(this).next().show();
}); 
    
//show(500)
$("#show500Block").click(function(){ 
    $(this).next().show(500);
});
    
//hide()
$("#hideBlock").click(function(){ 
    $(this).next().hide();
});
    
//hide(500)
$("#hide500Block").click(function(){ 
    $(this).next().hide(500);
});

//toggle()
$("#toggleBlock").click(function(){ 
    $(this).next().toggle();
});

//toggle(500)
$("#toggle500Block").click(function(){ 
    $(this).next().toggle(500);
});
    
//fadeIn()
$("#fadeInBlock").click(function(){ 
    $(this).next().fadeIn();
}); 
    
//fadeOut()
$("#fadeOutBlock").click(function(){ 
    $(this).next().fadeOut();
});
    
//fadeTo()
$("#fadeToBlock").click(function(){ 
    $(this).next().fadeTo(300,0.3);
});

//fadeToggle()
$("#fadeToggleBlock").click(function(){ 
    $(this).next().fadeToggle();
}); 

//slideDown()
$("#slideDownBlock").click(function(){ 
    $(this).next().slideDown();
});
    
//slideUp()
$("#slideUpBlock").click(function(){ 
$(this).next().slideUp();
});
    
//slideToggle()
$("#slideToggleBlock").click(function(){ 
$(this).next().slideToggle();
});
    
//animate()
$("#animateBlock").click(function(){ 
$(this).next().animate({
    opacity:0.6,
    width:50,
    color:"rgba(0,0,0,0)",
    height:50,
    borderRadius:25
}
//,{duration:500}
);
});   
    
//stop()
$("#move").click(function(){ 
    $(this).parent().next().animate({
        marginLeft:90
    },4000);
});
$("#stop").click(function(){ 
 $(".panel").next().stop();
});
    
//delay()
$("#delayBlock").click(function(){ 
    $(this).next().animate({
        marginLeft:80
    }).delay(1000).fadeOut();
});  
    
//finish()
$("#start").click(function(){ 
    $(this).parent().next().animate({
        width:"100%"
    },2000);
});
$("#finish").click(function(){ 
 $(this).parent().next().finish();
});

    
});