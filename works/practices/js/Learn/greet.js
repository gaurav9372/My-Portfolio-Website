// var x = 'Gaurav';
// document.write(x +"<br>");


var today 	= new Date();
var nowHour = today.getHours();
var greeting;

if (nowHour > 17)
{
	greeting="Good Evening";
}
else if(nowHour>0)
{
	greeting="Good Morning";
}
else if(nowHour>12)
{
	greeting="Good Afternoon";
}
else
{
	greeting="Welcome";
}

document.write(greeting);
