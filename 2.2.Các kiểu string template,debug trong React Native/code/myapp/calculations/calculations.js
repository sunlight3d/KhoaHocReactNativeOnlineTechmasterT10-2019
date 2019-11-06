/**
 * var = variable: function scope
 * let = block scope
 */
function doSomething(){
    var x = 11
    for(let i = 0; i < 10; i++){
        let x = 5
        //alert(x)
        //console.log("x = "+x)
        console.log(`Value of x = ${x}`)
    }    
    var personA = {
        name: "Hoang",
        email: 'hoang@gmail.com',
        age: 30
    };
    //Destructuring an object
    const {name, email, age} = personA
    console.log(`${(new Date()).toUTCString()}-name = ${name}, email: ${email}, age: ${age}`)
}
const PI = 3.14
const sum = (a, b) => {
    return a + b
}
export {
    doSomething,
    sum
}