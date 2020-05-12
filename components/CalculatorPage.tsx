import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions} from 'react-native'

import Icon from 'react-native-vector-icons/AntDesign';

const CalculatorPage = () =>  (
    <View >
        <View style={{padding: 10, height: Dimensions.get('window').height - 545}}>
            <ScrollView>
                <Text style={{color: "#fbfbfb", fontSize: 30, paddingVertical: 10}}>ITEM 1</Text>
                <Text style={{color: "#fbfbfb", fontSize: 30, paddingVertical: 10}}>ITEM 2</Text>
                <Text style={{color: "#fbfbfb", fontSize: 30, paddingVertical: 10}}>ITEM 3</Text>
            </ScrollView>
        </View>
        <View style={[style.calculatorContainer, {height: 120}]}>
            <View style={style.bracketsGroup}>
                <TouchableOpacity activeOpacity={.8} style={[style.simpleButton, style.coloredButton, style.bracketButton]}>
                    <Text style={[style.buttonText, style.brackerButtonText]}>[</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.8} style={[style.simpleButton, style.coloredButton, style.bracketButton]}>
                    <Text style={[style.buttonText, style.brackerButtonText]}>]</Text>
                </TouchableOpacity>
            </View>
            <View style={style.caculatorItems}>
                <View style={style.numberContainer}>
                    <View style={style.row}>
                        <TouchableOpacity activeOpacity={.8} style={style.simpleButton}>
                            <Text style={style.buttonText}>1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={.8} style={style.simpleButton}>
                            <Text style={style.buttonText}>2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={.8} style={style.simpleButton}>
                            <Text style={style.buttonText}>3</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={style.row}>
                        <TouchableOpacity activeOpacity={.8} style={style.simpleButton}>
                            <Text style={style.buttonText}>4</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={.8} style={style.simpleButton}>
                            <Text style={style.buttonText}>5</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={.8} style={style.simpleButton}>
                            <Text style={style.buttonText}>6</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={style.row}>
                        <TouchableOpacity activeOpacity={.8} style={style.simpleButton}>
                            <Text style={style.buttonText}>7</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={.8} style={style.simpleButton}>
                            <Text style={style.buttonText}>8</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={.8} style={style.simpleButton}>
                            <Text style={style.buttonText}>9</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={style.row}>
                        <TouchableOpacity activeOpacity={.8} style={style.simpleButton}>
                            <Text style={style.buttonText}> , </Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={.8} style={style.simpleButton}>
                            <Text style={style.buttonText}>0</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={.8} style={style.simpleButton}>
                            <Text style={style.buttonText}>±</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={style.operatorContainer}>
                    <View style={style.column}>
                        <TouchableOpacity activeOpacity={.8} style={[style.simpleButton, style.coloredButton]}>
                            <Text style={style.buttonText}>+</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={.8} style={[style.simpleButton, style.coloredButton]}>
                            <Text style={style.buttonText}>×</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={.8} style={[style.simpleButton, style.coloredButton]}>
                            <Text style={style.buttonText}>%</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={.8} style={[style.simpleButton, style.coloredButton]}>
                            <Text style={style.buttonText}>C</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={style.column}>
                        <TouchableOpacity activeOpacity={.8} style={[style.simpleButton, style.coloredButton]}>
                            <Text style={style.buttonText}>-</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={.8} style={[style.simpleButton, style.coloredButton]}>
                            <Text style={style.buttonText}>÷</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={.8} style={style.outputButton}>
                            <Icon name='enter' size={20} color="#fbfbfb"/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    </View>
)

export default CalculatorPage

const style = StyleSheet.create({
    calculatorContainer: {
        marginHorizontal: 10,
        marginTop: 10
    },
    bracketsGroup : {
        flexDirection: 'row',
    },
    simpleButton : {
        flexGrow: 1,
        alignItems: "center",
        margin: 2,
        justifyContent: "center",
        paddingVertical: 10
    },
    outputButton : {
        flexGrow : 300,
        alignItems: "center", 
        justifyContent: "center"
    },
    caculatorItems : {
        flexDirection: "row",
    },
    numberContainer : {
        flexGrow: 3
    },
    operatorContainer : {
        flexGrow: 2,
        flexDirection: "row"
    },
    row : {
        flexDirection : "row"
    },
    column : {
        flexGrow : 1
    },
    buttonText : {
        color: "#fbfbfb",
        fontSize: 30,
    },
    brackerButtonText: {
        fontSize: 16,
        fontWeight: "bold"
    },
    bracketButton: {
        paddingVertical: 3
    },
    coloredButton: {
        backgroundColor: "#303030",
        borderRadius: 3
    }
})