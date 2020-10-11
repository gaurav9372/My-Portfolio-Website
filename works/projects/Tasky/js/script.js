$(document).ready(function(){
    
    
    
    

$(function swapClick(){
$(".beforeClick").click(function(){
    
    $(this).removeClass("active");
    $(this).next().addClass("active");
    $(this).next().find("input").focus();
    
});
});
        
$(function Additem(){
    
$(".taskSwap .doneButton").click(function(){
        
var taskName = $("#newTaskName").val();
              
if(taskName !== ''){
            
var taskTitle = 
$("<p></p>").addClass("taskTitle").text(taskName);      
var checkbox = $("<input>").attr("type","checkbox");
    
 
var newTask = 
$("<div></div>").addClass("task").append(checkbox,taskTitle);
            
$(".newTask").before(newTask);
    
$("#newTaskName").val("");
}
        
else{
    alert("Enter task");
};
        
$(".afterClick").removeClass("active");
$(".beforeClick").addClass("active");
        
    });
    
    
    
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
$("<div></div>").addClass("groupContent").append("<h2>YEs</h2>");           

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
    
$(this).next(".groupContent").toggleClass("active");
$(this).find(".arrowIcon").toggleClass("active");
    
});
});
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});


