
$(document).ready(function(){
    

$(".groupContent").hide();

$(function taskHover(){
    
$(".task").mouseover(function () {
    //    $(".options").css({display:"flex"});
    $(this).find(".options").addClass("active");
});

$(".task").mouseleave(function () {
    $(this).find(".options").removeClass("active");
});
    

    
});
    
    
$(function swapClick(){
$(".beforeClick").click(function(){
    $(this).removeClass("active");
    $(this).next(".afterClick").addClass("active");
    $(this).next().find("input").focus(); 
});
});
      
    
$(function AddTask(){
    
$(".taskButton.add").click(function(){
        
var taskName = $("#newTaskName").val();
              
if(taskName !== ''){
            
var taskTitle = 
$("<p></p>").addClass("taskTitle").text(taskName);      
var checkbox = $("<input>").attr("type","checkbox");
    
var taskEditButton = $("<div></div>").addClass("editButton").append(
    $("<p>Edit</p>")
);
    
    

var taskDeleteButton = $("<div></div>").addClass("deleteButton");

var taskOptions = $("<div></div>").addClass("options").append(taskEditButton,taskDeleteButton);
 
var newTask = 
$("<div></div>").addClass("task").append(checkbox,taskTitle,taskOptions);
    
    
            
$(".newTask").before(newTask);
    
$("#newTaskName").val("");
}
        
else{
    alert("Enter task name please");
};       
$(".afterClick").removeClass("active");
$(".beforeClick").addClass("active");
});
    
$(".taskButton.cancel").click(function(){
    
$(this).parent().parent(".afterClick").removeClass("active");
$(this).parent().parent().prev(".beforeClick").addClass("active");
    
});
       
  
});
     
$(function deleteTask(){
    
    $(".deleteButton").click(function(){
        
        $(this).parent().parent().remove();
        
    });
    
    
    
});
    
    
$(function AddGroup(){  
    
$(".groupSwap .doneButton").click(function(){
        
var groupName = $("#newGroupName").val();
        
if(groupName !== ''){
            
var groupTitle = 
$("<p></p>").addClass("groupTitle").text(groupName);   
var icon = $("<img>").attr("src","resources/Icons/arrow.svg");
    
var arrowIcon =
$("<div></div>").addClass("arrowIcon").append(icon);
    
var groupHeader =
$("<div></div>").addClass("groupHeader").append(groupTitle,arrowIcon); 
    
var groupContent =
$("<div></div>").addClass("groupContent").append("<p>Yes</p>");           

var newGroup = 
$("<div></div>").addClass("group").append(groupHeader,groupContent);
      
    
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
    
    
    
    
    
    
    
    
    
    
    
    
    
    
$(function openGroup(){
$(".groupHeader").click(function(){

$(this).next().slideToggle(300,"linear");

$(this).find(".arrowIcon").toggleClass("active");
$(this).find(".arrowIcon img").toggleClass("active");
    
$(this).next().find("#newTaskName").val("");
$(this).next().find(".afterClick").removeClass("active");
$(this).next().find(".beforeClick").addClass("active");
    
});
});
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});


