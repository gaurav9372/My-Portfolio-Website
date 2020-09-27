function calculate(){

	var name = document.getElementById("name").value;
	var year = document.getElementById("byear").value;
	var cyear = new Date().getFullYear();
	var age;

	age = cyear-year;

	document.getElementById("result").innerHTML = "Hello "+name+",Your age is "+age;
	

}