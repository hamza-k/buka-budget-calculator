import React, { Component } from 'react'
import {View, StyleSheet, Text} from 'react-native'
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';

const AddBudgetModal = ({isActive, exitModalCB}) => (
    <View 
    style={[style.container, {height: (isActive) ? "100%" : 0}]}
    onPress={() => exitModalCB()}>
        <View style={[style.modal, {bottom : (isActive) ? 0 : -350}]}>
            <Text style={style.title}>Let's start</Text>
            <View style={{flexDirection: 'row', justifyContent: "space-evenly"}}>
                <Button
                icon={
                    <Icon
                    name="calculator"
                    size={40}
                    color="white"
                    />
                }
                iconLeft
                title="Calculator"
                titleStyle={{fontSize: 20, marginTop: 10}}
                buttonStyle={{flexDirection: "column", backgroundColor: "transparent", paddingHorizontal: 20}}
                onPress={() => exitModalCB()}/>
                <Button
                icon={
                    <Icon
                    name="list"
                    size={40}
                    color="white"
                    />
                }
                iconLeft
                title="Checklist"
                titleStyle={{fontSize: 20, marginTop: 10}}
                buttonStyle={{flexDirection: "column", backgroundColor: "transparent", paddingHorizontal: 20}}
                onPress={() => exitModalCB()}/>
            </View>
        </View>
    </View>
)

export default AddBudgetModal

const style = StyleSheet.create({
    container : {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#00000099",
    },
    modal : {
        padding: 30,
        backgroundColor: "#303030",
        position: "absolute",
        width: "100%"
    },
    title : {
        color: "#fbfbfb",
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        width: "100%",
        marginBottom: 20
    }
})