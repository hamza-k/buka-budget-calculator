import React from 'react'
import {ScrollView, Text, StyleSheet, TouchableOpacity} from 'react-native'
import BudgetListElement from './BudgetListElement'

const BudgetList = ({dataList, setBudgetElementMenu, setBudgetPage}) => {
    return (
        <ScrollView style={style.container}>
            {dataList.map(el => {
                return (
                    <TouchableOpacity 
                    activeOpacity={1} 
                    key={el.budget_id} 
                    onLongPress={() => setBudgetElementMenu(el)}
                    onPress={() => setBudgetPage(el)}>
                        <BudgetListElement dataElement={el}/>
                    </TouchableOpacity>
                    )
            })}
        </ScrollView>
    )
}

export default BudgetList

const style = StyleSheet.create({
    container : {
        paddingTop : 20,
        marginBottom: 58
    }
})