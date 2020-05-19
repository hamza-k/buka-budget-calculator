import React, { Component } from 'react'
import {View, StyleSheet, Text, TouchableWithoutFeedback} from 'react-native'
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';

const AddBudgetModal = ({
    isActive, 
    exitModalCB,
    createNewBudgetCB,
    getNewBudgetNameCB,
    fetchNewName
    }) => (
    <TouchableWithoutFeedback
    style={[style.container, {height: (isActive) ? "100%" : 0}]}
    onPress={() => exitModalCB()}>
    <View 
    style={[style.container, {height: (isActive) ? "100%" : 0}]}>
        <TouchableWithoutFeedback>
        <View style={[style.modal, {bottom : (isActive) ? 0 : -350}]}>
            <Input
            placeholder='Enter first your budget name'
            leftIcon={
                <Icon
                name='chevron-right'
                size={20}
                color='#3a3a3a'
                />
            }
            containerStyle={{marginBottom: 30}}
            inputStyle={{fontSize: 20, color: "#3a3a3a"}}
            labelStyle={{fontStyle: "italic"}}
            value={fetchNewName}
            onChangeText={value => getNewBudgetNameCB(value)}/>
            <Text style={style.title}>Let's start with</Text>
            <View style={{flexDirection: 'row', justifyContent: "space-evenly"}}>
                <Button
                icon={
                    <Icon
                    name="calculator"
                    size={40}
                    color="#ea9453"
                    />
                }
                iconLeft
                title="Calculator"
                titleStyle={{fontSize: 20, marginTop: 10, width: "100%", color: "#3a3a3a"}}
                buttonStyle={{flexDirection: "column", backgroundColor: "transparent", paddingHorizontal: 20}}
                onPress={() => createNewBudgetCB("calculator")}/>
                <Button
                icon={
                    <Icon
                    name="list"
                    size={40}
                    color="#ea9453"
                    />
                }
                iconLeft
                title="Checklist"
                titleStyle={{fontSize: 20, marginTop: 10, width: "100%", color: "#3a3a3a"}}
                buttonStyle={{flexDirection: "column", backgroundColor: "transparent", paddingHorizontal: 20, width: "100%"}}
                onPress={() => createNewBudgetCB("checklist")}/>
            </View>
        </View>
        </TouchableWithoutFeedback>
    </View>
    </TouchableWithoutFeedback>
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
        backgroundColor: "#ffffff",
        position: "absolute",
        width: "100%"
    },
    title : {
        color: "#3a3a3a",
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        width: "100%",
        marginBottom: 0
    },
    input : {
        color: "#3a3a3a",
        borderBottomColor: "#3a3a3a",
        borderBottomWidth: 1,
        marginBottom: 30,
        fontSize: 30,
        paddingBottom: 5
    }
})