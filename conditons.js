console.log("Please select an option \n 1. addition\n2. substract\n3. Multiplication\n4. Division")
var a =prompt("select an option");
var num1 = prompt("Enter first number");
var num2 = prompt("Enter second number");
a=parseInt(a)
num1=parseInt(num1)
num2=parseInt(num2)


let result=null;

var acon=isNaN(a);
var num1con=isNaN(num1);
var num2con=isNaN(num2);

if(acon||num1con||num2con)
{
    console.log("invalid input");
}
else{
    switch(a){
        case 1:
            result = num1+num2;
            break;
        case 2:
            result = num1-num2;
            break;
        case 3:
            result = num1*num2;
            break;
        case 4:
            result = num1/num2;
            break;
        default:
            break;
    }
console.log("result IS: "+result);
}