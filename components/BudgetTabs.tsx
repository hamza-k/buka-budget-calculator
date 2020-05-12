import React, { Component} from 'react'
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native'

const BudgetTabs = ({activeTab, setTabCB}) => (
    <View style={style.container}>
        <TouchableOpacity 
        style={style.touchableTab} 
        activeOpacity={.8} 
        onPress={() => setTabCB("calculator")}>
            <View style={[style.activeTabBg, {right : (activeTab == 'calculator') ? 0 : "100%"}]}/>
            <Text style={[style.title, {color : (activeTab == 'calculator') ? "#303030" : "#fbfbfb"}]}>Calculator</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={style.touchableTab} 
        activeOpacity={.8}
        onPress={() => setTabCB("checklist")}>
            <View style={[style.activeTabBg, {left : (activeTab == 'checklist') ? 0 : "100%"}]}/>
            <Text style={[style.title, {color : (activeTab == 'checklist') ? "#303030" : "#fbfbfb"}]}>CheckList</Text>
        </TouchableOpacity>
    </View>
)
export default BudgetTabs

const style = StyleSheet.create({

    container : {
        flexDirection : 'row',
        width: "100%",
        justifyContent: "space-between",
        marginBottom: 20,
        marginTop: 15
    },

    touchableTab : {
        width: "48%",
        paddingVertical : 3,
        position: "relative",
        overflow: "hidden"
    },

    title: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
        textTransform: "uppercase",
        letterSpacing: 2
    },
    activeTabBg : {
        position: "absolute",
        top: 0,
        backgroundColor: "#fbfbfb",
        width: "100%",
        height: 24,
        borderRadius: 6
    }
})