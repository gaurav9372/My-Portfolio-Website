var mainframe = document.getElementById("mainframe");

var helpButton = document.getElementById("helpButton");

var content = document.getElementById("content");

function openChatUI(){
    helpButton.style.display = "none";
    mainframe.style.display = "flex";
}

function closeChatUI(){
    
    helpButton.style.display = "flex";
    mainframe.style.display = "none";
    
}

 