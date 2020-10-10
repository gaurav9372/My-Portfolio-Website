$(document).ready(function(){
    
    
$(function openGroup(){
$(".groupHeader").click(function(){
    
$(this).next().toggleClass("active");
$(this).find(".arrowIcon").toggleClass("active");
    
});
});
    
$(function swapClick(){
$(".beforeClick").click(function(){
    
    $(this).removeClass("active");
    $(this).next().addClass("active");
    
});
});
    
      
$(function AddGroup(){
    $("#doneButton").click(function(){
        
var groupName = $("#newGroupName").val();
        
if(groupName !== ''){
            
var groupTitle = 
$("<p></p>").addClass("groupTitle").text(groupName);    
    
var groupHeader =
$("<div></div>").addClass("groupHeader").append(groupTitle);           
    
var newGroup = 
$("<div></div>").addClass("group").append(groupHeader);
            
            
$(".newGroup").before(newGroup);
$("#newGroupName").val("");
        }
else{
    alert("Enter group name please");
};
        
$(".afterClick").removeClass("active");
$(".beforeClick").addClass("active");
        
    });
});
    
    
    
    
    
    
    
    
});


