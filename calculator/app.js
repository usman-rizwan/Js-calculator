
function setNumber(num) {
    var result = document.getElementById('result');
    var lastVal = result.value.slice(result.value.length - 1);
    var opt = ['+','-','*','/'];
    if(opt.indexOf(lastVal) !== -1 && opt.indexOf(num) !== -1){
        result.value = result.value.slice(0,-1) + num
    }else{
        result.value += num;
    }
}
function clearResult() {
    var result = document.getElementById("result");
    result.value = "";
}
function getResult() {
    var result = document.getElementById("result");
    result.value = eval(result.value);
}

 function del() {
     var result = document.getElementById('result');
     result.value = result.value.slice(0, result.value.length - 1);
 }