function revealMessage(){
    document.getElementById("hiddenMessage").style.display = 'block';
} 
function countDown(){
    var currentVal = document.getElementById("coutDownButton").innerHTML;
    if(currentVal > 0){
        var newVal = currentVal - 1;
        document.getElementById("coutDownButton").innerHTML = newVal;
    }
}