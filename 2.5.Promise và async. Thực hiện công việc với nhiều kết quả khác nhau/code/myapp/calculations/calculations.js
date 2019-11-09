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
    function functionA() {
        var x = 1;
        function functionB() {
            //inner function, a closure
            console.log(`x = ${x}`)
        }
        functionB()
    }
    functionA()
    console.log(`sum 2 and 3 : ${sum2Numbers(2,3)}`)
    console.log(`3 squared = ${squared(3)}`)
    console.log(sayHello())
}
/*
const sum2Numbers = (x1, x2) => {
    return x1 + x2
}
*/
//one-line function
const sum2Numbers = (x1, x2) => x1 + x2
//1 param function
const squared = x => x * x
//no-params
const sayHello = () => "Hello, how are you ?"
const PI = 3.14
const sum = (a, b) => {
    return a + b
}
/*we have 2 tasks:
taskA: will be finished in 2 seconds(if success), 1.5 seconds if failed
taskB: 1 second to finish
We have 2 cases:
1.taskA and taskB starts at the same time
2.taskA starts, finish, then taskB start
*/
const taskA = (paramA) => {
    return new Promise((resolve, reject)=>{
        console.log("Begin TaskA")
        if(paramA === 1) {
            //success
            setTimeout(() => {
                console.log("End TaskA")
                resolve({x: 1, y: 2})
            }, 2000) //2000 miliseconds
        } else {
            //failed
            setTimeout(() => {
                console.log("End TaskA")
                reject({code: 500, content: "This is failed because..."})
            }, 1500)
        }
    })
}
const taskB = async () => {
    console.log("Begin taskB")
    setTimeout(() =>{
        console.log("End taskB")        
    }, 1000)
}
console.log('Run do2Tasks...')
/*
function do2Tasks() {
    //1.taskA and taskB starts at the same time = sync
    taskA(1).then(({x, y}) => {
        //2.taskA starts, finish, then taskB start
        taskB()
    }).catch(({}, {error}) => {
        console.log(`error's code : ${error.code}, error's content : ${error.content}`)
    })    
}*/

//You can use async / await
async function do2Tasks() {    
    try {
        //1.taskA and taskB starts at the same time = sync
        taskA(2)
        taskB()
    } catch(error) {
        console.log(JSON.stringify(error))
        console.log(`error's code : ${error.code}, error's content : ${error.content}`)
    }    
}
export {
    doSomething,
    sum,
    do2Tasks
}