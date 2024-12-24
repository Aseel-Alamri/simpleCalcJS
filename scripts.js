var calculateSum = () => {
 
   let num1 = document.getElementById("num1").value;
   let num2 = document.getElementById("num2").value;

 
   let sum = parseFloat(num1) + parseFloat(num2);

   
   if (isNaN(sum)) {
       document.getElementById("result").innerHTML = "Please enter valid numbers.";
   } else {
     
       document.getElementById("result").innerHTML = "The SUM is: " + sum;
   }
};




