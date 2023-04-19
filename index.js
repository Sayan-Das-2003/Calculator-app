const keys=document.querySelectorAll('.key');
const screen_input=document.querySelector('.screen>.content>.input');
const screen_output=document.querySelector('.screen>.content>.output');

let input="";
for(let key of keys){
    const value=key.dataset.key;
    key.addEventListener('click',()=>{
        if(value=="clear"){
            input="";
            screen_input.innerHTML=input;
            screen_output.innerHTML=input;
        }
        else if(value=="backspace"){
            input=input.slice(0,-1);
            screen_input.innerHTML=input;  
        }
        else if(value=="="){
            let answer=eval(input);
            screen_output.innerHTML=answer;
        }
        else if(value=="brackets"){
            if(input.indexOf("(")==-1 ||input.indexOf("(")!=-1 && input.indexOf(")")!=-1 && input.lastIndexOf("(")<input.lastIndexOf(")")){
                input+="(";
            }
            else if(input.indexOf("(")!=-1 && input.indexOf(")")==-1||input.indexOf("(")!=-1 && input.indexOf(")")!=-1&& input.lastIndexOf("(")> input.lastIndexOf(")")){
                input+=")";
            }
            screen_input.innerHTML=input;
        }
        else{
            input+=value;
            screen_input.innerHTML=input;
        }
    })
}
function cleanInput(input){
    let input_array=input.split("");
    let input_array_length=input_array.length;
    for(let i=0;i<input_array_length;i++){
        
    }
}
