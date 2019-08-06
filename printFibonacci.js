//this program is written to rename the function console.log

var logSeries = console.log

function printFibonacci(number){
    var n = 0
    var i = 1
    var j = 1
    while(n < number){
        n = i
        logSeries(n)
        i = j
        j = n+i
    }
}

printFibonacci(50)