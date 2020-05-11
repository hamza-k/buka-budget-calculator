import React, { Component } from 'react'
import {View, StyleSheet, Text, TextInput, TouchableWithoutFeedback} from 'react-native'
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';

const BudgetEditConfirmationModal = ({isActive, budgetElement, exitModalCB, toConfirmEditCB, EditBudgetNameData}) => (
    <TouchableWithoutFeedback
    style={[style.container, {height: (isActive) ? "100%" : 0}]}
    onPress={() => exitModalCB()}>
    <View style={[style.container, {height: (isActive) ? "100%" : 0}]}>
        <TouchableWithoutFeedback>
            <View style={[style.modal, {bottom : (isActive) ? 0 : -350}]}>
                <Text style={{color: "#fbfbfb", fontSize: 20, marginBottom: 15, marginLeft: 10}}>Enter a name for your budget :</Text>
                <Input
                leftIcon={
                    <Icon
                    name='chevron-right'
                    size={20}
                    color='#fbfbfb'
                    />
                }
                containerStyle={{marginBottom: 30}}
                inputStyle={{fontSize: 20, color: "#fbfbfb"}}
                labelStyle={{fontStyle: "italic"}}
                value={budgetElement.budget_name}
                onChangeText={value => EditBudgetNameData(value)}/>
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
                        buttonStyle={style.buttonStyle}
                        title="   Submit"
                        onPress={() => exitModalCB()}/>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    </View>
    </TouchableWithoutFeedback>
)

export default BudgetEditConfirmationModal

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
        backgroundColor: "#202020"
        }
})