import React, { Component } from 'react'
import {View, StyleSheet, Text, TextInput, TouchableWithoutFeedback} from 'react-native'
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';

const ItemDeleteConfirmationModal = ({
    isActive, 
    itemElement, 
    exitModalCB, 
    toDeleteCB
    }) => (
    <TouchableWithoutFeedback
    style={[style.container, {height: (isActive) ? "100%" : 0}]}
    onPress={() => exitModalCB()}>
    <View style={[style.container, {height: (isActive) ? "100%" : 0}]}>
        <TouchableWithoutFeedback>
            <View style={[style.modal, {bottom : (isActive) ? 0 : -350}]}>
                <Text style={{color: "#fbfbfb", fontSize: 20, marginBottom: 15}}>Are you sure you want to delete this budget :</Text>
                <Text style={[style.title, {
                    fontWeight: (itemElement.item_name != "") ? "bold" : "normal",
                    fontStyle : (itemElement.item_name != "") ? "normal" : "italic",
                    opacity : (itemElement.item_name != "") ? 1.0 : 0.5
                }]}>{(itemElement.item_name != "") ? itemElement.item_name : "No name here"}</Text>
                <Text style={{color: "#fbfbfb", fontSize: 30, alignSelf : "center", marginBottom: 30, fontStyle: 'italic', fontWeight: "bold"}}>{itemElement.item_price} €</Text>
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
                        title="   Confirm"
                        onPress={() => toDeleteCB(itemElement)}/>
                    </View>
                    <View style={style.buttonItem}>
                        <Button
                        icon={
                            <Icon
                            name="cross"
                            size={20}
                            color="white"
                            />
                        }
                        iconLeft
                        titleStyle={{fontSize: 20}}
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

export default ItemDeleteConfirmationModal

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