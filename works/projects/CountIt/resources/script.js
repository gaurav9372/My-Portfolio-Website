$(document).ready(function(){
    
var startWith=0;
var readingValue=0;

 
$("#okButton").click(function(){ 
    
startWith = $("#currtextbox").val();
    
if(startWith==""){
startWith=0;
readingValue=0;
}else{
startWith=startWith;
readingValue=parseInt(startWith,10);
$("#reading").text(startWith);
}
    
});
    

    
$(".plusone").click(function(){
    
$("#reading").text(
    readingValue=readingValue+1
    )
});
$(".minusone").click(function(){ 
$("#reading").text(
    readingValue=readingValue-1
    )
});
    


    

$(".reset").click(function(){
$("#reading").text(readingValue=0)
});





});