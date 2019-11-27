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
