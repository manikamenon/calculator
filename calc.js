function displayData(n){
    result .value+=n
}

function calculate(){
    result.value=eval(result.value)
}

function allclear(){
    result.value=" "
}

function del(){
    result.value=result.value.slice(0,-1)
}