import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { RFValue } from "react-native-responsive-fontsize";


const BudgetHeader = ({budgetName, totalPrice, totalCheckedPrice, displayType}) => {
    if (displayType == "checklist") {
        return (
            <View style={style.container}>
                <Text style={[style.budgetName, {opacity : (budgetName != "") ? 1 : 0.5}]}>{(budgetName != "") ? budgetName : "No budget name"}</Text>
                <Text style={style.budgetPriceTotal}>Over {Math.round(totalPrice * 100) / 100} €</Text>
                <Text style={style.budgetPriceLeft}>{Math.round(totalCheckedPrice * 100) / 100} €</Text>
            </View>
        )
    }
    if (displayType == "calculator") {
        return (
            <View style={style.container}>
                <Text style={[style.budgetName, {opacity : (budgetName != "") ? 1 : 0.5}]}>{(budgetName != "") ? budgetName : "No budget name"}</Text>
                <Text style={style.budgetPriceTotal}>Checked {Math.round(totalCheckedPrice * 100) / 100} €</Text>
                <Text style={style.budgetPriceLeft}>{Math.round(totalPrice * 100) / 100} €</Text>
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
        fontSize: RFValue(50, 850),
        fontWeight: "bold"
    },
    budgetPriceTotal : {
        fontSize : 22,
        color: "#3a3a3a",
        opacity: .5,
        textAlign: "right",
    }
})