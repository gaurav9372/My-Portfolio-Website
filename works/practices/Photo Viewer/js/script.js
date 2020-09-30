$(document).ready(function(){
    
    
    $(".thumb").click(function(e){
                
    e.preventDefault();
    $(".thumb").removeClass('active');
    $(this).addClass("active");
        
    var Path = $(this).attr("href");
    
    
       
        
    $("#screen img").ready(function(){
        
    $("#loader").css("display","none");
    $("#screen img").attr("src",Path) 
        
        });
    });
    
    
    
    
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
}); 