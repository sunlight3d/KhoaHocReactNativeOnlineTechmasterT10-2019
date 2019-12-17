import React, {Component} from 'react'
import {
    View, Text, TextInput, StyleSheet
} from 'react-native'
import {ComponentA} from '../components/ComponentA'
import {ComponentB} from '../components/ComponentB'

export default class Main extends Component {
    render() {
        return <View style={styles.container}>
            <ComponentA x={1} name={"xyz"}/>
            <ComponentB y = {2} name={"ABC"}/>
        </View>
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,        
        justifyContent: 'center',
        alignItems: 'center',        
    }
})


