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
        borderBottomColor: "#ea9453"
    },
    budgetName: {
        fontStyle: "italic",
        color: "#3a3a3a",
        fontSize: 28
    },
    budgetPriceLeft : {
        color: "#3a3a3a",
        textAlign: "right",
        fontSize: 60,
        fontWeight: "bold"
    },
    budgetPriceTotal : {
        fontSize : 22,
        color: "#3a3a3a",
        opacity: .5,
        textAlign: "right",
    }
})