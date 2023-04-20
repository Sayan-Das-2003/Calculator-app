const keys=document.querySelectorAll('.key');
const screen_input=document.querySelector('.screen>.content>.input');
const screen_output=document.querySelector('.screen>.content>.output');

let input="";
let output="";
for(let key of keys){
    const value=key.dataset.key;
    key.addEventListener('click',()=>{
        if(value=="clear"){
            input="";
            screen_input.innerHTML=cleanInput(input);
            screen_output.innerHTML=cleanInput(input);
        }
        else if(value=="backspace"){
            input=input.slice(0,-1);
            screen_input.innerHTML=cleanInput(input); 
        }
        else if(value=="="){
            let answer;
            try{answer=eval(percentage(input));
            if(answer=="undefined") throw err;
        }
            catch(err){
                answer="Syntax Error";
            }
            if(answer!="Infinity" || answer!="Syntax Error"){
            screen_output.innerHTML=cleanOutput(answer);input="";output="#";}
            else  screen_output.innerHTML=answer,input="",output="#";
        }
        else if(value=="brackets"){
            if(input.indexOf("(")==-1 ||input.indexOf("(")!=-1 && input.indexOf(")")!=-1 && input.lastIndexOf("(")<input.lastIndexOf(")")){
                input+="(";
                if(output=="#")  {screen_output.innerHTML="";output="";}
            }
            else if(input.indexOf("(")!=-1 && input.indexOf(")")==-1||input.indexOf("(")!=-1 && input.indexOf(")")!=-1&& input.lastIndexOf("(")> input.lastIndexOf(")")){
                input+=")";
                if(output=="#")  {screen_output.innerHTML="";output="";}
            }
            screen_input.innerHTML=cleanInput(input);
        }
        else{
            if(validInput(value)){
                if(output=="#") {screen_output.innerHTML="";output="";}
            input+=value;
            screen_input.innerHTML=cleanInput(input);
            }
        }
    })
}
function cleanInput(input){
    let input_array=input.split("");
    let input_array_length=input_array.length;
    for(let i=0;i<input_array_length;i++){
        if(input_array[i]=="*"){
            input_array[i]= `<span class="operator">x</span>`;
        }
        else if(input_array[i]=="%"){
            input_array[i]= `<span class="percent">%</span>`;
        }
        else if(input_array[i]=="/"){
            input_array[i]= `<span class="operator">/</span>`;
        }
        else if(input_array[i]=="+"){
            input_array[i]= `<span class="operator">+</span>`;
        }
        else if(input_array[i]=="-"){
            input_array[i]= `<span class="operator">-</span>`;
        }
        else if(input_array[i]=="("){
            input_array[i]= `<span class="brackets">(</span>`;
        }
        else if(input_array[i]==")"){
            input_array[i]= `<span class="brackets">)</span>`;
        }
    }
    return input_array.join("");
}
function cleanOutput(output){
    if(output=="Infinity"|| output=="Syntax Error") return output;
    let output_array=output.toString();
    let decimal=output_array.split(".")[1];
    output_array=output_array.split(".")[0];
    let Output=output_array.split("");
    if(Output.length>3){
        for(let i=Output.length-3;i>0;i-=3){
            Output.splice(i,0,",");
        }
    }
    if(decimal){
        Output.push(".");
        Output.push(decimal);
    }
    return Output.join("");
}
function validInput(value){
    let last_input=input.slice(-1);
    let operators=["*","-","+","/"];
    if(input.indexOf(".")!=-1 && value=="."){
        alert("There is already a decimal");
        return false;
    }
    if(operators.includes(value)){
        if(operators.includes(last_input)){
            alert("There should not be two consequetive operators");
            return false;
        }
        else return true;
    }
    return true;
}
function percentage(input){
    let input_array=input.split("");
    for(let i=0;i<input_array.length;i++){
        if(input_array[i]=="%"){
            input_array[i]="/100";
        }
    }
    return input_array.join("");
}
