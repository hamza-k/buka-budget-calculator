import React from 'react'
import {Text, View, StyleSheet, Image} from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import imgLogoHeaderColor from '../assets/logo_header-color.png'
import imgLogoHeaderBW from '../assets/logo_header-color-bw.png'


const Header = ({ isHome, goOptionCB, goHomeCB}) => (
    <View style={style.container}>
        <Icon 
        name="home" 
        style={[style.icon, {transform: [{translateX: (isHome) ? -40 : 0}]}]}
        onPress={() => goHomeCB()}/>
        <Image source={imgLogoHeaderColor} style={style.logo}/>
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
        backgroundColor: "#ffffff",
        flexDirection : "row",
        justifyContent: "space-between",
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 4,
},
shadowOpacity: 0.29,
shadowRadius: 4.65,

elevation: 7,
    },
    logo : {
        height : 24,
        width: 85
    },
    icon : {
        color: "#3a3a3a",
        fontSize: 24
    }
})