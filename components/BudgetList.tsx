import React from 'react'
import {ScrollView, Text, StyleSheet} from 'react-native'
import BudgetListElement from './BudgetListElement'

const BudgetList = ({dataList}) => {

    return (
        <ScrollView style={style.container}>
            {dataList.map(el => {
                return <BudgetListElement key={el.budget_id} dataElement={el}/>
            })}
        </ScrollView>
    )
}

export default BudgetList

const style = StyleSheet.create({
    container : {
        paddingHorizontal : 10,
        marginTop : 3,
        paddingTop : 20,
        marginBottom: 58
    }
})