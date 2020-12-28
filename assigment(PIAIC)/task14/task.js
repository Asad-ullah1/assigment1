var a = 2, b =1;
var num1 = --a;
var num2 = --b;
var num3 = ++b;
var num4 = b--;
document.write("Prefix of --a is : "+ num1 +"<br>" );
document.write("Prefix of --b is : "+ num2 +"<br>" );
document.write("Prefix of ++b is : "+ num3 +"<br>" );
document.write("Postix of --b is : "+ num4 +"<br>" );
var result = num1 - num2 + num3 + num4;

document.write("Here is Result : " + result);