/*
var: function scoped
let: block scoped
*/

function doSomething() {
    for(let i = 0; i < 10; i++) {
        var x = 10        
        let y = 10
    }
    console.log(`x = ${x}`)
    //console.log(`y = ${y}`)
    //console.log(`i = ${i}`);
    for(let j = 0; j < 10; j++) {
        setTimeout(() => {
            console.log("j1= "+j)
        }, 1000)
    }
}
const squared = (numbers) => {
    return numbers.map(number => number * number)
}
export {
    doSomething,
    squared
}