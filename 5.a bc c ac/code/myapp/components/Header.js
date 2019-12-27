import React from 'react'
import { View, 
    Text,
    StyleSheet,
    SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {COLOR_RED} from './colors'
export const Header = (props) => {
    const {pressBack, pressMenu, pressMusic} = props
    return <View style={styles.container}>
        <View style={styles.viewLeft}>
            <Icon name="arrow-back"
                onPress={pressBack}
                size={25} color={"white"}
                style={{ padding: 8 }}
            />
            <Text style={styles.myMusic}>MY MUSIC</Text>
        </View>        
        <View style={styles.viewRight}>
            <Icon name="menu"
                onPress={pressMenu}
                size={25} color={"white"}
                style={{ padding: 8 }}
            />
            <Icon name="music-note"
                onPress={pressMusic}
                size={25} color={"white"}
            />
        </View>
        
    </View>
}
const styles = StyleSheet.create({
    container: {
        height: 50, 
        backgroundColor: COLOR_RED,
        flexDirection: 'row',    
        alignItems: 'center'
    },
    myMusic: {
        color: 'white',
        fontWeight: 'bold'
    },
    viewLeft: {
        width: '50%',        
        flexDirection: 'row',
        alignItems: 'center'
    },
    viewRight: {
        width: '50%',        
        flexDirection: 'row',
        justifyContent:'flex-end',
        alignItems: 'center',
        paddingRight: 8
    }
})