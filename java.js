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
     }
    if(getValue === "="){ 
        const Ans = Equal();
     return;
    }
  if(getValue === "E"){clearState(); return;}


    if(getValue === "+" || getValue === "-" || getValue === "/" || getValue === "*"){OperaPress(getValue); }
    
 if(getValue === "."){
   
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
       let anse = ans.split("");
        anse.pop();
        ans = anse.join('');  
        Scre.textContent = ans; 
    }
    
 }); });



 function check(op){
  let opeartors = ["+","-","*","/"];
      if (!opeartors.some(op => Scre.textContent.includes(op))) {
    console.log("nofunction")
     operand = ""; } 

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
    let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
    if(second ==""){return;}
    second = second.split('').filter(sin => numbers.includes(sin)).join("");
     first = first.split('').filter(sin => numbers.includes(sin)).join("");
first =  parseFloat(first);
second = parseFloat(second);
console.log(typeof second);
console.log(first);
console.log(second);

  if(operand== 1){result = first + second;}
  if(operand == 2){result = first - second;}
  if(operand == 3){result = first * second;}
  if(operand == 4){ if(second === 0){Scre.textContent="ERROR"; return;} result = first / second;}

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