/**
 * var = variable: function scope
 * let = block scope
 */
function doSomething(){
    var x = 11
    for(let i = 0; i < 10; i++){
        let x = 5
        //alert(x)
    }    
}
const PI = 3.14
const sum = (a, b) => {
    return a + b
}
export {
    doSomething,
    sum
}