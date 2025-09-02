let first = "";
let operand = 0;
let second = "";
let result = 0;

const Scre = document.querySelector(".screen");
const btn = document.querySelectorAll(".num");
 const maxChar = 10;
btn.forEach(Ele => {Ele.addEventListener("click", () => { const getValue = Ele.getAttribute("value");
     if(Scre.textContent === ""){
        clearState(); 
        //clearState if user remove all charcter just pressing c , if screen is empty, all variables gets empty too
     }
    if(getValue === "="){ 
        //this equals the result when press "="
        const Ans = Equal();
     return;
    }//the following getValue === "E" is CE , which clearState 
  if(getValue === "E"){clearState(); return;}

     //this following assigned the operand value, when user press any operand
    if(getValue === "+" || getValue === "-" || getValue === "/" || getValue === "*"){OperaPress(getValue); }
    
 if(getValue === "."){
   // this conditions are for , user dont press dot more than once
     if(first === "" && Scre.textContent.includes(".")){
         
         return;
     }
       if(second.includes(".")){
       return;
     }
      
     if( first.includes(".") && operand === ""){
    
        return;
     }
         
    }
 

    if(getValue === "C"){
        //this is to remove single character from screen
         Scre.textContent = Scre.textContent.slice(0, -1); 
    return;}
    if(first === "" || operand === ""){
            Scre.textContent += getValue;
            console.log(second);
    }else{
        console.log(second);
         
         second += getValue;
         Scre.textContent += getValue;
    }

    let ans = Scre.textContent;
    if(ans.length >= maxChar){
        //this is to ensure not more than 10 characters are written on the screen
       let anse = ans.split("");
        anse.pop();
        ans = anse.join('');  
        Scre.textContent = ans; 
    }
    
 }); });



 function check(op){
    //this checks for any ghost operands
  let opeartors = ["+","-","*","/"];
      if (!opeartors.some(op => Scre.textContent.includes(op))) {
    console.log("nofunction")
     operand = ""; } 
 //this to see which operand is chosen by user and then return a value according to it
    if(op === "+") {  return 1;}
    if(op === "-"){ return 2;}
    if(op === "*"){  return 3;}
    if(op === "/"){ return 4;}
 }


function OperaPress(oper){
    if(first === ""){
         first = Scre.textContent;
    }
    operand = check(oper);
}

function Equal(){
    //this is a little guard which ensures that only numbers are stored in the first and second variables
    let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
    if(second ==""){return;}
    second = second.split('').filter(sin => numbers.includes(sin)).join("");
     first = first.split('').filter(sin => numbers.includes(sin)).join("");

first =  parseFloat(first);
second = parseFloat(second);
console.log(typeof second);
console.log(first);
console.log(second);
//this calculates the results
  if(operand== 1){result = first + second;}
  if(operand == 2){result = first - second;}
  if(operand == 3){result = first * second;}
  if(operand == 4){ if(second === 0){Scre.textContent="ERROR"; return;} result = first / second;}
//this stores the result in first variable as string and reset second and operand varaible
  first = result.toString();
  console.log(second);
      second = "";
      operand = "";
     Scre.textContent = result;
     
}

function clearState(){
    first = '';
    second = '';
    operand = '';
    Scre.textContent = "";
    return;
}