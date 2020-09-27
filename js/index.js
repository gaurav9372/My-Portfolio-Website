$(document).ready(function(){
    
$(".tab-control").click(function(){                   
    var id = $(this).attr("data-tab");
        
    $(".tab-control").removeClass('active');
    $(".tab-panel").removeClass('active');
        
    $(this).addClass('active');
    $("#"+id).addClass('active');
        
  });
    
$("#menuButt").click(function(){
    
    $(".menu").toggleClass("active");
    
});
    
$(".menuItem").click(function(){
    
    $(".menu").removeClass("active");
    
});
    
    
});
    
