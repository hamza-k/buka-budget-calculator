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
                color='#3a3a3a'
                />
            }
            containerStyle={{marginBottom: 30}}
            inputStyle={{fontSize: 20, color: "#3a3a3a"}}
            labelStyle={{fontStyle: "italic"}}
            onChangeText={value => getNewItemNameCB(value)}/>
            <View style={{flexDirection: "row"}}>
                <Input
                placeholder='And how much does it cost ?'
                keyboardType = 'decimal-pad'
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
                onChangeText={value => getNewItemPriceCB(value)}/>
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
                        title="   Confirm"
                        onPress={() => createNewItemCB()}/>
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