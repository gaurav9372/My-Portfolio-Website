function add(){
    
var number1=document.calc.num1.value;
var number2=document.calc.num2.value;

var result=Number(number1)+Number(number2);

alert("Sum is "+ result);
}


function minus(){

var number1=document.calc.num1.value;
var number2=document.calc.num2.value;

var result=Number(number1)-Number(number2);
alert("Difference is: "+result);

}

function multiply(){

var number1=document.calc.num1.value;
var number2=document.calc.num2.value;
    
var result=Number(number1)*Number(number2);
alert("Multiplication is: "+result);

}

function divide(){

var number1=document.calc.num1.value;
var number2=document.calc.num2.value;

var result=Number(number1)/Number(number2);

alert("Division is: "+result);

}