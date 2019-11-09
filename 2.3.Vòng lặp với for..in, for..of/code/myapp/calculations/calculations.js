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
    for(const property in personA) {
        console.log(`property = ${property}, value = ${personA[property]}`)
    }
    const points = {
        1: 2.1,
        2: 33,
        4: 12,
        5: 15
    }
    for(x in points) {
        console.log(`x = ${x}, y = ${points[x]}`)
    }
    const numbers = [1,4,5,7,9]
    for(const number in numbers) { //in: show "index"
        console.log(`number = ${number}`)
    }
    for(const number of numbers) { //of = show "value"
        console.log(`number = ${number}`)
    }
    let films = [
        {
            name: "Back to the Future",            
            year: 1985
        },{
            name: "Star Wars",            
            year: 1977
        },{
            name: "The Matrix",            
            year: 1999
        },{
            name: "Inception",            
            year: 2010
        },{
            name: "Interstellar",            
            year: 2014
        },
    ]
    for(const film of films) {
        console.log(`film = ${JSON.stringify(film)}`)
    }
    for(const index in films) {
        console.log(`index = ${index}`)
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