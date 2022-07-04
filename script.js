


    const num1=document.getElementById('text1')
const num2=document.getElementById('text2')
let select=document.getElementById('o1')
let select1=document.getElementById('o2')
let value
let value1


function get(){
    value1=select.options[select1.selectedIndex].text;
    
}

function get1(){
    value=select.options[select.selectedIndex].text;
}


window.addEventListener("keyup" , onkeyup);

function onkeyup(event){
    console.log('getting call');
    if((value ==='$') && (value1 === '$')){
        let result = parseInt(num1.value)+ parseInt(num2.value)+'$';

        document.getElementById("value").innerHTML=result;
    }
    else if((value === '₹') && (value1 === '₹')){

    

        let result = parseInt(num1.value)+ parseInt(num2.value)+'₹';

        document.getElementById("value").innerHTML=result;
    }
    
 else{
    document.getElementById("value").innerHTML="not a number";
 }

    
}

