function oddEvenChecking(){
    var number;
    number=Number(document.getElementById("value").value);
        
        if(number%2==0){
           alert("even number");
        }
    else{
       alert( "odd number");
    }
}

function palindrome()
{
var a,number,b,temp=0;

number=Number(document.getElementById("input").value);

b=number;
while(number>0)
{
a=number%10;
number=parseInt(number/10);
temp=temp*10+a;
}
if(temp==b)
{
alert("Palindrome number");
}
else
{
alert("Not Palindrome number");
}
}

function fibo() {

   var i;
   i= parseInt(document.getElementById("inCount").value);
var fib = []; 
fib[0] = 0;
fib[1] = 1;
for(i=0; i<=10; i++)
{

fib[i+2] = fib[i] + fib[i+1];
console.log(fib[i]);
}
}


var array = new Array();
function pushArray(){
array.push((document.getElementById("elem").value));
    document.getElementById("elem").value ='';
}
var count = 1
function myFunction() {
    var arrayLength = array.length;
    var i;
    var j;
     for(i=0;i<arrayLength;i++)
    {
        for(j=i+1;j<arrayLength;j++)
        {
          if(array[i]<array[j])
          {
                    k=array[i];
                    array[i]=array[j];
                    array[j]=k;

          }
  
        }


    }
    
    console.log(array);
}

function factorial(){

var i, no, fact;
fact=1;
no=Number(document.getElementById("num").value);
for(i=1; i<=no; i++)  
{
fact= fact*i;
}  
document.getElementById("fac").value= fact;
}