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
        
        let [x, y] = [10, 15]
        console.log(`x = ${x}, y = ${y}`)
        let [a, b, ...rest] = [10, 15, 14, 16, 19, 20]
        console.log(`rest = ${rest}`)
        
        const [red, green, blue, yellow = "#ffff00"] = ["#ff0000", "#00ff00", "#0000ff"]
        console.log(`red = ${red}, green = ${green}, blue = ${blue}, yellow = ${yellow}`)
        //Distructuring array from a function 
        let [number1,,number3] = this.get3Numbers()
        console.log(`number1 = ${number1}, number3 = ${number3}`)                
        //Object distructuring
        let person = {name: "Hoang", email: "hoang@gmail.com"}
        let {name, email, age = 18} = person
        
        debugger
    }   
    get3Numbers() {
        return [100, 300, 200]
    }
    render(){
        const rect1 = new Rectangle(0, 0, 100, 200)
        const rect2 = new Rectangle(1, 1, 100, 200)
        rect1.width = 500
        const rect3 = {...rect1}
        return <View>
            <Text>{JSON.stringify(rect1)}</Text>
            <Text>{`rect1's key = ${JSON.stringify(Object.keys(rect1))}`}</Text>
            {/* Clone an object ? */}       
            <Text>rect3 = {JSON.stringify(rect3)}</Text>     
            <Text>Distance = {rect1.distance(rect2)}</Text>
        </View>
    }
}
