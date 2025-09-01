let first = "";
let operand = "";
let second = "";

const Scre = document.querySelector(".screen");
const btn = document.querySelectorAll(".num");
 const maxChar = 10;
btn.forEach(Ele => {Ele.addEventListener("click", () => { const getValue = Ele.getAttribute("value");
 if(!first == "" && !operand == ""){
    Equal(first,second,operand);
 }
    if(getValue === "="){
        
        const Ans = Equal(first, second, operand);
     return;
    }

    if(getValue === "+" || getValue === "-" || getValue === "/" || getValue === "x"){OperaPress(getValue); }
    if(getValue === "C"){
        Scre.textContent = Scre.textContent.slice(0, -1); 
    return;}
    if(first === ""){
            Scre.textContent += getValue;
    }else {
        second = Scre.textContent += getValue;
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
    if(op === "+") {  return "+";}
    if(op === "-"){ return "-";}
    if(op === "x"){  return "x";}
    if(op === "/"){ return "/";}
 }
 function Guard(firs){
    let numbers = ("0,1,2,3,4,5,6,7,8,9");
  let  str = firs.split('');
   let ftr = numbers.split('');
  return str.filter(fil => ftr.includes(fil));

 }

function OperaPress(oper){
    if(first === ""){
         first += Scre.textContent;
    }
    operand += check(oper);
   
}

function Equal(first, second, operand){
    if(second ==""){return;}
  Guard(first);
  Guard(second);
  parseFloat(first);
  parseFloat(second);
  switch(operand){
    case "+": Scre.textContent = ""; let result =parseFloat(first) + parseFloat(second); first = result; Scre.textContent = result; second = "";

  }
}
