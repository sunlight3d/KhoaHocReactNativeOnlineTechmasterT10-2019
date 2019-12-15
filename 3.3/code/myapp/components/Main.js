import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {doSomething, sum, do2Tasks} from '../calculations/calculations'
import Rectangle from '../models/Rectangle'

export default class Main extends Component{
    componentDidMount() {
        //doSomething()
        //alert("6 plus 4 = "+sum(6,4))//press Cmd/Ctrl+S to save and reload
        //console.log("6 plus 4 = "+sum(6,4))
        //do2Tasks()
    }
    mapNumbersToTexts = (numbers) => {
        const output2 = numbers.map(function(number, index){ 
            return <Text style={{color: 'red', fontWeight: 'bold'}}>
                {index}. number = {number}, 
                </Text> //JSX
        })
        return output2
    }
    render(){
        const rect1 = new Rectangle(0, 0, 100, 200)
        const rect2 = new Rectangle(1, 1, 100, 200)
        rect1.width = 500
        const rect3 = {...rect1}
        //Desctructuring an array         
        let [a, b, ...rest] = [120, 150, 170, 180, 200] //... = spread operator
        const [x, y, z = 66] = [5, 7] //z get a "default value"
        //Destructuring an object
        let studentA = {name: "Hoang", age: 30, marks: {math: 5, physics: 6}}
        //studentA is a "nested object"
        const {name, age} = studentA
        const {math, physics, english = 5} = studentA.marks //default value
        const numbers = [2, 5, 7, 6, 9]
        const output = numbers.map(number => number * number) //one-line function
        
        return <View>
            <Text>{JSON.stringify(rect1)}</Text>
            <Text>{`rect1's key = ${JSON.stringify(Object.keys(rect1))}`}</Text>
            {/* Clone an object ? */}       
            <Text>rect3 = {JSON.stringify(rect3)}</Text>     
            <Text>Distance = {rect1.distance(rect2)}</Text>
            <Text style={{fontSize: 23}}>
                a = {a}, b = {b}, rest = {JSON.stringify(rest)}, z = {z}
                name = {name}, age = {age}, math = {math}, physics = {physics}, english ={english}
                output = {JSON.stringify(output)}
            </Text>
            {this.mapNumbersToTexts(numbers)}
        </View>
    }
}
