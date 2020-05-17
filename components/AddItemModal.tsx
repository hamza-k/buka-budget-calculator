import React, { Component } from 'react'
import {View, StyleSheet, Text, TextInput, TouchableWithoutFeedback} from 'react-native'
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';

const AddItemModal = ({
    isActive, 
    closeAddItemModalCB,
    createNewItemCB,
    getNewItemNameCB,
    getNewItemPriceCB,
    defaultNewPriceValue,
    defaultNewNameValue
    }) => (
    <TouchableWithoutFeedback
    style={[style.container, {height: (isActive) ? "100%" : 0}]}
    onPress={() => closeAddItemModalCB()}>
    <View 
    style={[style.container, {height: (isActive) ? "100%" : 0}]}>
        <TouchableWithoutFeedback>
        <View style={[style.modal, {bottom : (isActive) ? 0 : -350}]}>
            <Input
            placeholder='Enter first your budget name'
            value={defaultNewNameValue}
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
            onChangeText={value => getNewItemNameCB(value)}/>
            <View style={{flexDirection: "row"}}>
                <Input
                placeholder='And how much does it cost ?'
                keyboardType = 'decimal-pad'
                value={(defaultNewPriceValue != 0) ? defaultNewPriceValue.toString() : "0"}
                leftIcon={
                    <Icon
                    name='chevron-right'
                    size={20}
                    color='#fbfbfb'
                    />
                }
                containerStyle={{marginBottom: 30, width: "75%"}}
                inputStyle={{fontSize: 20, color: "#fbfbfb"}}
                labelStyle={{fontStyle: "italic"}}
                onChangeText={value => getNewItemPriceCB(value)}/>
                <Text style={{color: "#fbfbfb", fontSize: 20, paddingTop: 15}}>€</Text>
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
                        buttonStyle={style.buttonStyle}
                        title="   Confirm"
                        onPress={() => createNewItemCB()}/>
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
                        onPress={() => closeAddItemModalCB()}/>
                    </View>
                </View>
        </View>
        </TouchableWithoutFeedback>
    </View>
    </TouchableWithoutFeedback>
)

export default AddItemModal

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
        marginBottom: 0
    },
    input : {
        color: "#fbfbfb",
        borderBottomColor: "#fbfbfb",
        borderBottomWidth: 1,
        marginBottom: 30,
        fontSize: 30,
        paddingBottom: 5
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