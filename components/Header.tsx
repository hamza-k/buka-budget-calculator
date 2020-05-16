import React from 'react'
import {Text, View, StyleSheet, Image} from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import imgLogoHeader from '../assets/logo_header.png'


const Header = ({ isHome, goOptionCB, goHomeCB}) => (
    <View style={style.container}>
        <Icon 
        name="home" 
        style={[style.icon, {transform: [{translateX: (isHome) ? -40 : 0}]}]}
        onPress={() => goHomeCB()}/>
        <Image source={imgLogoHeader} style={style.logo}/>
        <Icon 
        name="menu" 
        style={[style.icon, {transform: [{translateX: (!isHome) ? 40 : 0}]}]}
        onPress={() => goOptionCB()}/>
    </View>
)

export default Header

const style = StyleSheet.create({
    container : {
        padding : 10,
        width: "100%",
        backgroundColor: "#303030",
        flexDirection : "row",
        justifyContent: "space-between"
    },
    logo : {
        height : 24,
        width: 85
    },
    icon : {
        color: "#fbfbfb",
        fontSize: 24
    }
})