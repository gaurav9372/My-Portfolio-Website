function changecolor() {
    var el = document.getElementById('box');
    
    if (el.className == 'bluebox')
    {
        el.className = 'greenbox';
    }
    else 
    {
        el.className = 'bluebox';
    }
}