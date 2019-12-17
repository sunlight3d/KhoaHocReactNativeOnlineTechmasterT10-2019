import React from 'react'
import {
    View, Text,
    TextInput,
    StyleSheet,
    TouchableHighlight
} from 'react-native'
//Component can be a class or function ?
export class ComponentB extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            something: '',
            count: 0
        }
    }
    componentDidMount() {
        console.log('componentDidMount')
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if(nextState.count == 5) {
            return false //do not call render at this !
        }
        return true
    }
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
    componentDidCatch(error, errorInfo) {
        console.log(`componentDidCatch - ${error} - ${errorInfo}`)
    }
    clickHere = async () => {
        this.setState({count: this.state.count + 1})
    }
    render() {
        console.log('render')
        const {y, name} = this.props
        return <View>
            <Text>This is ComponentB, y={y},name={name}</Text>
            <TextInput 
                style={styles.textInput}   
                value={this.state.something}  
                onChangeText={(something) => {
                    this.setState({something})
                }}>

            </TextInput>
            <Text>{this.state.count}</Text>
            <TouchableHighlight onPress={() => {
                this.clickHere()
            }}>
                <Text>Click HERE</Text>
            </TouchableHighlight>
        </View>
    }
}
const styles = StyleSheet.create({
    textInput: {        
        height: 40,
        borderWidth: 2,
        borderRadius: 6,
        padding: 10
    }
})