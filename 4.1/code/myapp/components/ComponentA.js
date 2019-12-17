
import React, {useState} from 'react'
import {
    View, Text, StyleSheet, TextInput,
    TouchableHighlight
} from 'react-native'
//How to use state here ?
export const ComponentA = ({x, name}) => {
    const [something, setSomething] = useState('')
    const clickMe = () => {
        alert("You clicked button")
    }
    return <View>
        <Text>This is ComponentA, x={x}, name={name}</Text>
        <TextInput 
                style={styles.textInput}   
                value={something}  
                onChangeText={(text) => {
                    setSomething(text)
                }}>

        </TextInput>
        <TouchableHighlight onPress={() => {
            clickMe()
        }}>
            <Text style={styles.mybutton}>Click Me</Text>
        </TouchableHighlight>
    </View>
}
const styles = StyleSheet.create({
    textInput: {        
        height: 40,
        borderWidth: 2,
        borderRadius: 6,
        padding: 10
    },
    mybutton: {
        backgroundColor: 'red',
        height: 40
    }
})