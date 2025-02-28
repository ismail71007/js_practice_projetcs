//events of javascript
//onclick, on mouse hover
/*
document.querySelector('#name').addEventListener('focus',test);
document.querySelector('#name').addEventListener('keyup',test2);

function test(e){
    this.style.background='pink';
}
function test2(e){
    document.getElementById("demo").innerText= this.value;
}
    */

/*
let re= /hello/i;
//console.log(re); 
str="Hello world";
str="again hello world"
let result= re.exec(str);
console.log(result);
*/

/*
let re; 
let str;

re=/hello/i;
str="hello world";

//meta characters
re=/^hello/i; //must start with
re=/hello$/i; //must end with
re=/h[eai]llo/i;

//bangladeshi phone number 
re=/^01[0-9]{9}$/;
re=/^\+8801[0-9]{9}$/;
re=/\W/;

str="+8801819491670";


//shorthand characters


console.log(re.exec(str));
retest(re,str);
function retest(re,str){
    if(re.test(str))
    {
        console.log(`${str} matches ${re.source}`);
    }
    else
    {
        console.log(`${str} doesnt matches ${re.source}`);
    }
}
*/
//email address
let re;let str;
re=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
str="ismailbabu007@gmail.com";
console.log(re.test(str));