import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

const Header = ({title}) => (
    <View style={style.container}>
        <Text style={style.title}>{title}</Text>
    </View>
)

export default Header

const style = StyleSheet.create({
    container : {
        paddingVertical : 10,
        paddingHorizontal : 20,
        width: "100%",
        backgroundColor: "#303030"
    },
    title : {
        fontSize : 24,
        color : "#fbfbfb",
        fontWeight: "bold"
    }
})