import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const BudgetHeader = ({budgetName, totalPrice, totalCheckedPrice, displayType}) => {
    if (displayType == "checklist") {
        return (
            <View style={style.container}>
                <Text style={[style.budgetName, {opacity : (budgetName != "") ? 1 : 0.5}]}>{(budgetName != "") ? budgetName : "No budget name"}</Text>
                <Text style={style.budgetPriceTotal}>Over {totalPrice} €</Text>
                <Text style={style.budgetPriceLeft}>{totalCheckedPrice} €</Text>
            </View>
        )
    }
    if (displayType == "calculator") {
        return (
            <View style={style.container}>
                <Text style={[style.budgetName, {opacity : (budgetName != "") ? 1 : 0.5}]}>{(budgetName != "") ? budgetName : "No budget name"}</Text>
                <Text style={style.budgetPriceTotal}>Checked {totalCheckedPrice} €</Text>
                <Text style={style.budgetPriceLeft}>{totalPrice} €</Text>
            </View>
        )
    }
}
export default BudgetHeader

const style = StyleSheet.create({
    container: {
        paddingBottom: 20,
        borderBottomWidth: 2,
        borderBottomColor: "#fbfbfb"
    },
    budgetName: {
        fontStyle: "italic",
        color: "#fbfbfb",
        fontSize: 28
    },
    budgetPriceLeft : {
        color: "#fbfbfb",
        textAlign: "right",
        fontSize: 75
    },
    budgetPriceTotal : {
        fontSize : 22,
        color: "#fbfbfb",
        opacity: .5,
        textAlign: "right",
    }
})