import React from 'react'
import { View, Text,SafeAreaView, StyleSheet,
    Image
 } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import LinearGradient from 'react-native-linear-gradient'
import {Header} from './Header'
import {COLOR_RED} from './colors'
import Svg, {
    Circle,
    Polyline,
    Path,
  } from 'react-native-svg'

export default class DetailSong extends React.Component {
    state ={
        isPlaying: false
    }
    _pressMusic() {
        alert("Press music")
    }
    _pressBack() {
        alert("Press back")
    }
    componentDidMount() {
        drawBezierCurve()
    }
    render() {
        const {isPlaying} = this.state
        const startPoint = [0, 0]
        const controlPoint = [10, 30]
        const endPoint = [100, 100]
        return <SafeAreaView style={styles.container}>
            <Header pressMusic={this._pressMusic} pressBack={this._pressBack}/>            
            <LinearGradient colors = {['rgb(43,44,62)', 'rgb(104,87,134)']}
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                style={styles.container}>
                    <View style={{flexDirection: 'row', 
                                  justifyContent: 'center',
                                  paddingVertical: 20}}>
                        <Image style={styles.song} source={require('../images/song.jpg')} />                        
                    </View>
                    <View style={styles.songBottom}>
                        <Text style={styles.textSongStartEnd}>3:01</Text>
                        <Text style={styles.textSongStartEnd}>6:50</Text>
                    </View>
                    <View style={{height: 100, width: '100%',                                 
                                justifyContent: 'center',
                                alignItems: 'center',
                                }}>
                        <Text style={styles.textSongName}>SUNDORY HARY</Text>
                        <Text style={styles.textSongName}>Love story - 2019</Text>
                    </View>
                    <View style={{height: 70,                                                                 
                                flexDirection: 'row',justifyContent: 'space-around',
                                alignSelf: 'center', alignItems: 'center',
                                width: '80%'}}>
                        <Feather name="skip-back"                            
                            size={35} color={"white"}
                            style={{ padding: 8 }}
                        />        
                        <MaterialCommunityIcons name= {isPlaying == false ? "play-circle" : "pause-circle"}   
                            onPress = {() => {
                                this.setState({isPlaying: !isPlaying})
                            }}                           
                            size={60} color={COLOR_RED}
                            style={{ padding: 8 }}
                        />        
                        <Feather name="skip-forward"                            
                            size={35} color={"white"}
                            style={{ padding: 8 }}
                        />        
                    </View>     
                    <Svg height="50%" width="100%" viewBox="0 0 300 100">                        
                        {/* <Path d={`
                            M ${startPoint}
                            Q ${controlPoint} ${endPoint}                            
                        `} strokeWidth = {2} stroke={COLOR_RED} fill="none"/> */}
                        {drawBezierCurve()}
                    </Svg>           
            </LinearGradient>
        </SafeAreaView>
    }
}
const drawBezierCurve = (color) => {
    //create random values
    const d1 = `
            M ${[0, 0]}
            S ${[60,80]} ${[135,0]}
            S ${[180,60]} ${[220,50]}
            S ${[250,0]} ${[300,20]}
        `
    const path1 = <Path d={d1} strokeWidth = {1} stroke={COLOR_RED} fill="none" />
    const d2 = `
            M ${[0, 10]}
            S ${[70,60]} ${[115,0]}
            S ${[170,70]} ${[210,50]}
            S ${[250,0]} ${[300,10]}
        `
    const path2 = <Path d={d2} strokeWidth = {1} stroke={"white"} fill="none" opacity={0.6}/>
    return [path1, path2]
}

const styles = StyleSheet.create({
    container: {
        flex: 1,        
    }, 
    song:{
        width: 250,
        height: 250,        
        borderWidth: 5,
        borderColor: 'rgb(233,74,70)',
        borderRadius: 250/2,                       
    },
    songBottom: {
        height: 30,
        width: '70%',        
        marginTop: -30,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    textSongStartEnd: {
        fontSize: 14,     
        color: 'white',   
        opacity: 0.7
    },
    textSongName: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 17, 
        fontFamily: 'Helvetica',
        padding: 3
    }
})
