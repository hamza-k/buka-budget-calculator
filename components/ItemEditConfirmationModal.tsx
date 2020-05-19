import React, { Component } from 'react'
import {View, StyleSheet, Text, TextInput, TouchableWithoutFeedback} from 'react-native'
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';

const ItemEditConfirmationModal = ({
    isActive, 
    itemNameValue, 
    itemPriceValue, 
    exitModalCB, 
    toConfirmEditCB, 
    EditItemNameData, 
    EditItemPriceData
    }) => (
    <TouchableWithoutFeedback
    style={[style.container, {height: (isActive) ? "100%" : 0}]}
    onPress={() => exitModalCB()}>
    <View style={[style.container, {height: (isActive) ? "100%" : 0}]}>
        <TouchableWithoutFeedback>
            <View style={[style.modal, {bottom : (isActive) ? 0 : -400}]}>
                <Text style={{color: "#3a3a3a", fontSize: 20, marginBottom: 15, marginLeft: 10}}>Enter a name for your item :</Text>
                <Input
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
                value={itemNameValue}
                onChangeText={value => EditItemNameData(value)}/>
                <Text style={{color: "#3a3a3a", fontSize: 20, marginBottom: 15, marginLeft: 10}}>Enter its price :</Text>
                <View style={{flexDirection: "row"}}>
                    <Input
                    leftIcon={
                        <Icon
                        name='chevron-right'
                        size={20}
                        color='#3a3a3a'
                        />
                    }
                    containerStyle={{marginBottom: 30, width: "75%"}}
                    inputStyle={{fontSize: 20, color: "#3a3a3a"}}
                    labelStyle={{fontStyle: "italic"}}
                    keyboardType = 'decimal-pad'
                    value={(itemPriceValue != 0) ? itemPriceValue.toString() : ""}
                    onChangeText={value => EditItemPriceData(value)}/>
                    <Text style={{color: "#3a3a3a", fontSize: 20, paddingTop: 15}}>€</Text>
                </View>
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
                        title="   Submit"
                        onPress={() => toConfirmEditCB()}/>
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

export default ItemEditConfirmationModal

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