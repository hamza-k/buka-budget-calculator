import React, { Component } from 'react'
import {View, StyleSheet, Text, TextInput, TouchableWithoutFeedback} from 'react-native'
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';

const BudgetDeleteConfirmationModal = ({isActive, budgetElement, exitModalCB, toConfirmDeleteCB}) => (
    <TouchableWithoutFeedback
    style={[style.container, {height: (isActive) ? "100%" : 0}]}
    onPress={() => exitModalCB()}>
    <View style={[style.container, {height: (isActive) ? "100%" : 0}]}>
        <TouchableWithoutFeedback>
            <View style={[style.modal, {bottom : (isActive) ? 0 : -350}]}>
                <Text style={{color: "#3a3a3a", fontSize: 20, marginBottom: 15}}>Are you sure you want to delete this budget :</Text>
                <Text style={[style.title, {
                    fontWeight: (budgetElement.budget_name != "") ? "bold" : "normal",
                    fontStyle : (budgetElement.budget_name != "") ? "normal" : "italic",
                    opacity : (budgetElement.budget_name != "") ? 1.0 : 0.5
                }]}>{(budgetElement.budget_name != "") ? budgetElement.budget_name : "No name budget"}</Text>
                <View style={style.buttonsContainer}>
                    <View style={style.buttonItem}>
                        <Button
                        icon={
                            <Icon
                            name="check"
                            size={20}
                            color="white"
                            />
                        }
                        iconLeft
                        titleStyle={{fontSize: 20}}
                        buttonStyle={[style.buttonStyle, {backgroundColor: "#ea9453"}]}
                        title="   Confirm"
                        onPress={() => toConfirmDeleteCB(budgetElement)}/>
                    </View>
                    <View style={style.buttonItem}>
                        <Button
                        icon={
                            <Icon
                            name="cross"
                            size={20}
                            color="#ea9453"
                            />
                        }
                        iconLeft
                        titleStyle={{fontSize: 20, color: "#3a3a3a"}}
                        buttonStyle={style.buttonStyle}
                        title="   Cancel"
                        onPress={() => exitModalCB()}/>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    </View>
    </TouchableWithoutFeedback>
)

export default BudgetDeleteConfirmationModal

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
        marginBottom: 20
    },
    buttonsContainer : {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    buttonItem : {
        width: "45%"
    },
    buttonStyle: {
        paddingHorizontal: 20, 
        paddingVertical: 10,
        backgroundColor: "#ffffff"
        }
})