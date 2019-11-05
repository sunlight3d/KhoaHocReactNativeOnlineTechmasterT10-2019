import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {doSomething} from '../calculations/calculations'
export default class Main extends Component {
    componentDidMount() {
        doSomething()
    }
    render() {
        return <View>

        </View>
    }
}