function calculate(length,breadth,height){

var len = document.MVF.length.value;
var bre = document.MVF.breadth.value;
var hei = document.MVF.height.value;
    
var area = len * bre;
var volume = len * bre * hei;
    
var result = [area,volume];
return result;
    
var x = document.MVF.length.value;
var y = document.MVF.breadth.value;
var z = document.MVF.height.value;
    
var findArea = calculate(x,y,z)[0];
var findVolume = calculate(x,y,z)[1];
    

    
alert("Area is " + findArea + "and volume is " + findVolume);
}