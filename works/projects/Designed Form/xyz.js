$(document).ready(function(){

$('input').focus(function(){
  $(this).prev().addClass('focused');
});

$('input').blur(function(){
  var inputValue = $(this).val();
  if ( inputValue == "" ) {
    $(this).prev().removeClass('focused');  
  } else {
    $(this).prev().addClass('focused');
  }
})  ;
    
    
});