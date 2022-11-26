//let value=document.getElementById('button');
function addToSum(value) {
  document.getElementById("screen").value += value;
}
function evaluateSum() {
  let k = document.getElementById("screen").value;
  sum = eval(k);
  document.getElementById("screen").value = sum;
  if (sum===undefined) {
    document.getElementById("screen").value = "";
  }
} 
function clearSum() {
  document.getElementById("screen").value = " ";
}
function delSum() {
  let number = document.getElementById("screen").value;
  let result = number.slice(0, -1);
  document.getElementById("screen").value = result;
}
function addToSumDec(value){
    let decimal = document.getElementById('screen').value;
    let a= decimal.length-1;
    if(decimal[a] != '.'){
     document.getElementById('screen').value+=value
    }
    else{
    
    }
}
function noOfComa(){
    let num = 0;
    for(let x=0; x<document.getElementById('screen').value.length; x++){
        if((document.getElementById('screen').value[x]).includes('.')){
    }
    }
    return(count);
}
function numberC(){
    let count = 0;
    let girl=['/','+','*','-']
    
    for(let x = 0; x<document.getElementById('screen').value.length; x++){
        for(let h=0; h< girl.length;h++){
            if(document.getElementById('screen').value[x].includes(girl[h]))
            count++;
        }
}
return(count);
}

//var numberString = document.getElementById('screen').value;
//numberString.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$ ,");
