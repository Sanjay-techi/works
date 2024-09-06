let calculationComplete=false;
function appendToDisplay(value){
    const display=document.getElementById('display');
    if (calculationComplete && !isNaN(value)){
        display.value=value;
        calculationComplete=false;
    }
    else{
        display.value += value;
    }
}
function clearDisplay(){
    document.getElementById('display').value='';
    calculationComplete=false;
}
function clearValue(){
    document.getElementById('display').value='';
    calculationComplete=true;
}
function calculate(){
    const display=document.getElementById('display');
    try{
        display.value=eval(display.value);
        calculationComplete=true;
    }
    catch (e){
        display.value='Error';
    }
}