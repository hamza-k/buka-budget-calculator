import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native'

import Icon from 'react-native-vector-icons/AntDesign';
import Eicon from 'react-native-vector-icons/Entypo';

const CalculatorPage = ({
    budgetLatestItems,
    isActive,
    calcOutput,
    doCalcInput,
    doCalcOperator,
    doInvertOutput,
    doEraseOutput,
    doEvalPercentage,
    doEvalOutput,
    latestBudgetItems
    }) =>  (
    <View style={[style.container, {right: (isActive) ? 0 : "100%" }]}>
        <View style={style.latestBudgetContainer}>
            <View style={[style.emptyListContainer, {
                height: (budgetLatestItems == []) ? "100%" : 0, 
                marginTop: (budgetLatestItems == []) ? 3 : 0,
                paddingTop: (budgetLatestItems == []) ? 50 : 0,
                opacity : (budgetLatestItems == []) ? 0.4 : 0}]}>
                <View style={{width: "100%", alignItems: "center"}}>
                    <Eicon
                    name="calculator"
                    size={60}
                    color="white"
                    />
                </View>
                <Text style={style.emptyArrayMessage}>Let's start to calculate a new item</Text>
            </View>
            {
                latestBudgetItems.map(element => {
                    
                    return (
                        <View key={element.item_id} style={[style.latestBudgetItemContainer, {backgroundColor: "#ebebeb", paddingHorizontal: 20, borderRadius: 6}]}>
                            <Text style={[style.latestBudgetItemText, {
                                fontWeight: (element.item_name != "") ? "bold" : "normal",
                                fontStyle: (element.item_name == "") ? "italic" : "normal",
                                opacity : (element.item_name != "") ? 1.0 : 0.5
                            }]}>
                                {(element.item_name != "") ? element.item_name : "No name here"}
                            </Text>
                            <Text style={[style.latestBudgetItemText, style.latestBudgetItemPrice]}>{element.item_price} €</Text>
                        </View>
                    )
                })
            }
        </View>
        <View style={[style.latestBudgetItemContainer]}>
            <Text 
            style={style.calculatorOutput}>{calcOutput}</Text>
        </View>
        <View style={[style.calculatorContainer, {height: 170}]}>
            <View style={style.bracketsGroup}>
                <TouchableOpacity 
                activeOpacity={.8} 
                style={[style.simpleButton, style.coloredButton, style.bracketButton]}
                onPress={() => doCalcInput("(")}>
                    <Text style={[style.buttonText, style.brackerButtonText]}>[</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                activeOpacity={.8} 
                style={[style.simpleButton, style.coloredButton, style.bracketButton]}
                onPress={() => doCalcInput(")")}>
                    <Text style={[style.buttonText, style.brackerButtonText]}>]</Text>
                </TouchableOpacity>
            </View>
            <View style={style.caculatorItems}>
                <View style={style.numberContainer}>
                    <View style={style.row}>
                        <TouchableOpacity 
                        activeOpacity={.8} 
                        style={style.simpleButton}
                        onPress={() => doCalcInput("1")}>
                            <Text style={style.buttonText}>1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        activeOpacity={.8} 
                        style={style.simpleButton}
                        onPress={() => doCalcInput("2")}>
                            <Text style={style.buttonText}>2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        activeOpacity={.8} 
                        style={style.simpleButton}
                        onPress={() => doCalcInput("3")}>
                            <Text style={style.buttonText}>3</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={style.row}>
                        <TouchableOpacity 
                        activeOpacity={.8} 
                        style={style.simpleButton}
                        onPress={() => doCalcInput("4")}>
                            <Text style={style.buttonText}>4</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        activeOpacity={.8} 
                        style={style.simpleButton}
                        onPress={() => doCalcInput("5")}>
                            <Text style={style.buttonText}>5</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        activeOpacity={.8} 
                        style={style.simpleButton}
                        onPress={() => doCalcInput("6")}>
                            <Text style={style.buttonText}>6</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={style.row}>
                        <TouchableOpacity 
                        activeOpacity={.8} 
                        style={style.simpleButton}
                        onPress={() => doCalcInput("7")}>
                            <Text style={style.buttonText}>7</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        activeOpacity={.8} 
                        style={style.simpleButton}
                        onPress={() => doCalcInput("8")}>
                            <Text style={style.buttonText}>8</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        activeOpacity={.8} 
                        style={style.simpleButton}
                        onPress={() => doCalcInput("9")}>
                            <Text style={style.buttonText}>9</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={style.row}>
                        <TouchableOpacity 
                        activeOpacity={.8} 
                        style={style.simpleButton}
                        onPress={() => doCalcInput(".")}>
                            <Text style={style.buttonText}> , </Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        activeOpacity={.8} 
                        style={style.simpleButton}
                        onPress={() => doCalcInput("0")}>
                            <Text style={style.buttonText}>0</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        activeOpacity={.8} 
                        style={style.simpleButton}
                        onPress={() => doInvertOutput()}>
                            <Text style={style.buttonText}>±</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={style.operatorContainer}>
                    <View style={style.column}>
                        <TouchableOpacity 
                        activeOpacity={.8} 
                        style={[style.simpleButton, style.coloredButton]}
                        onPress={() => doCalcOperator("+")}>
                            <Text style={style.buttonText}>+</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        activeOpacity={.8} 
                        style={[style.simpleButton, style.coloredButton]}
                        onPress={() => doCalcOperator("*")}>
                            <Text style={style.buttonText}>×</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        activeOpacity={.8} 
                        style={[style.simpleButton, style.coloredButton]}
                        onPress={() => doEvalPercentage()}>
                            <Text style={style.buttonText}>%</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        activeOpacity={.8} 
                        style={[style.simpleButton, style.coloredButton]}
                        onPress={() => doEraseOutput()}>
                            <Text style={style.buttonText}>C</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={style.column}>
                        <TouchableOpacity 
                        activeOpacity={.8} 
                        style={[style.simpleButton, style.coloredButton]}
                        onPress={() => doCalcOperator("-")}>
                            <Text style={style.buttonText}>-</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        activeOpacity={.8} 
                        style={[style.simpleButton, style.coloredButton]}
                        onPress={() => doCalcOperator("/")}>
                            <Text style={style.buttonText}>÷</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        activeOpacity={.8} 
                        style={style.outputButton}
                        onPress={() => doEvalOutput()}>
                            <Icon name='enter' size={20} color="#3a3a3a"/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    </View>
)

export default CalculatorPage

const style = StyleSheet.create({
    container : {
        position: "absolute", 
        top: 0
    },
    latestBudgetContainer : {
        padding: 10, 
        height: Dimensions.get('window').height - 620,
        justifyContent: "flex-end",
        flexDirection: "column"
    },
    latestBudgetItemContainer : {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems : "center",
        marginTop: 15
    },
    latestBudgetItemText : {
        color: "#3a3a3a", 
        fontSize: 20, 
        paddingVertical: 10
        },
    latestBudgetItemPrice : {
        fontSize: 35
    },
    calculatorContainer: {
        marginHorizontal: 10,
        marginTop: 10
    },
    calculatorOutput : {
        color: "#3a3a3a", 
        fontSize: 50, 
        paddingVertical: 10, 
        paddingHorizontal: 10, 
        fontWeight : "bold", 
        textAlign: "right", 
        width: "100%"
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
        flexGrow : 400,
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
        color: "#3a3a3a",
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
        backgroundColor: "#cbcbcb",
        borderRadius: 3
    },
    emptyArrayMessage : {
        fontSize: 30,
        color: "#3a3a3a",
        textAlign: "center",
        width: "70%",
        marginTop: 10
    },
    emptyListContainer : {
        paddingHorizontal : 10,
        marginTop : 3,
        paddingTop : 50,
        width: "100%",
        alignItems: "center",
        opacity: 0.4
    }
})