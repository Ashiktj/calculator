//1 display a number on the field
function displaynum(num){
inp.value+=num
}

//clear
function cleartext(){
    inp.value=``
}

//evaluate
function evaluateexpression(){
    // exp=inp.value
    // output=eval(inp.value)
    // inp.value=output
   inp.value=eval(inp.value)
}

// clear last digit
function clearlast(){
    inp.value=inp.value.slice(0,-1)
}