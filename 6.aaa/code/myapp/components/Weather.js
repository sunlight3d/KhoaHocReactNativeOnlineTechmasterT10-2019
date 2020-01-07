import React, {Component} from 'react'
import {View, StyleSheet, SafeAreaView, 
    Text,
    Image, 
    ImageBackground,    
    FlatList} from 'react-native'
import {getIcon, getBackgroundItem} from '../constants/constants'
let fakedArray = [
    {
        areaName: 'Gold Coast',
        dateTime: 'Sun, 11am',
        temperature: 23,
        icon: 'rain',
        background: 'rainBackground'
    },
    {
        areaName: 'Sydney',
        dateTime: 'Sun, 11am',
        temperature: 22,
        icon: 'rain',
        background: 'sunnyBackground'
    },{
        areaName: 'Perth',
        dateTime: 'Sun, 11am',
        temperature: 18,
        icon: 'rain',
        background: 'stormBackground'
    },{
        areaName: 'Darwin',
        dateTime: 'Sun, 11am',
        temperature: 30,
        icon: 'rain',
        background: 'sunnyBackground'
    },

    
]
export default class Weather extends Component {
    render() {
        return <SafeAreaView style={styles.container}>
            <FlatList data={fakedArray}
                    renderItem = {WeatherItem}
                    ItemSeparatorComponent = {() => {
                        return <View style = {{height: 2, 
                            width: '100%', backgroundColor:'#000'}}>

                        </View>
                    }}
                    keyExtractor={(item, index) => `${index}`}
            />
        </SafeAreaView>
    }
}
const WeatherItem = ({item, index}) => {
    const {areaName, dateTime, temperature, icon, background} = item    
    return <ImageBackground 
        source = {getBackgroundItem[background]}
        style={[styles.weatherItem, 
                    {backgroundColor: index % 2 === 0 ? 'powderblue': 'skyblue'}]}>
        {/* <Text>{areaName.toUpperCase()}, {dateTime.toUpperCase()}, 
            {temperature}, {icon.toUpperCase()}</Text> */}
            <View style={[styles.subItem, {width: '35%',}]}>
                <Text style={styles.text}>{areaName.toUpperCase()}</Text>
                <Text style={styles.text}>{dateTime.toUpperCase()}</Text>
            </View>            
            <View style={[styles.subItem, {width: '30%'}]}>
                <Text style={[styles.text, {fontSize: 60}]}>{temperature}°</Text>
            </View>            
            <View style={[styles.subItem, {width: '35%'}]}>
                <Image 
                    style={{tintColor: 'white', width: 50, resizeMode: 'contain'}}
                    source={getIcon[icon]}></Image>
            </View>            
    </ImageBackground>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,           
    }, 
    weatherItem: {
        height: 100,          
        flexDirection: 'row',        
    }, 
    subItem: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    text: {
        color: 'white',
        fontSize: 20,
        width: '80%',
        textAlign: 'center'
    }
})