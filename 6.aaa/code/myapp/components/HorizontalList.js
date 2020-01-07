import React, {Component} from 'react'
import {View, StyleSheet, SafeAreaView, 
    Text,
    Image, 
    ImageBackground,
    FlatList} from 'react-native'
import Weather from './Weather'
import ViewPager from '@react-native-community/viewpager'
import Ionicons from 'react-native-vector-icons/Ionicons'
const pages = [
    0, 1, 2, 3
]
export default class HorizontalList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: 0,            
        }
        //Reference to ViewPager's object
        this.viewPager = React.createRef()
    }
    generatePages = () => {
        return pages.map(index => {
            return <View key = {`${index}`}>
                <Weather />
            </View>
        })
    }
    generateButtons = () => {
        return pages.map(index => {
            return <Ionicons size={20} key = {`${index}`}
                    style = {styles.pageButton}
                    color = "white" 
                    onPress = {() => {
                        this.viewPager.current.setPage(index)
                    }}
                    name= {index === this.state.currentPage ? 
                        "ios-radio-button-on" : "ios-radio-button-off"}/>
        })
    }
    //what about android ?
    render() {
        return <SafeAreaView style={styles.container}>
            <ViewPager style={styles.container} initialPage={0} 
                onPageSelected = {(event) => {
                    this.setState({currentPage: event.nativeEvent.position})
                }}
                ref = {this.viewPager}
                >
                {this.generatePages()}      
            </ViewPager>
            <View style={styles.footer}>                
                {this.generateButtons()}
            </View>
        </SafeAreaView>
        
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    footer: {
        height: 50,        
        flexDirection: 'row',
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    pageButton: {
        padding: 2
    }
})