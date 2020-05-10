import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'


const Header = ({title}) => (
    <View style={style.container}>
        <Icon name="home" style={style.icon}/>
        <Text style={style.title}>{title}</Text>
        <Icon name="menu" style={style.icon}/>
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
    title : {
        fontSize : 24,
        color : "#fbfbfb",
        fontWeight: "bold"
    },
    icon : {
        color: "#fbfbfb",
        fontSize: 24
    }
})