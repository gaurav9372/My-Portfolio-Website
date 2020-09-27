function check() {
    
    var items = document.getElementsByClassName('item');

    var textContent = items[2].textContent;
    var innerHtml = items[2].innerHTML;
    
    alert("textContent: "+textContent + " and "+"innerHTML: "+innerHtml);
    
    var parent = items[0].parentNode;
    //    parent.style.backgroundColor='darkgreen';
    parent.style.padding = '1px 30px 1px';


    if (items.length >= 5) {

        //items[3].style.backgroundColor = 'blue' ;
        //el.className = 'greenbox';
        for (var i = 0; i <= items.length; i = i + 2) {
            items[i].style.backgroundColor = 'hsla(0,90%,40%,1)';
        }
    };

    
}