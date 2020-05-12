import React, {Component} from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'
import StatusBarComp from './StatusBarComp';
import Header from './Header';
import BudgetTabs from './BudgetTabs'
import BudgetHeader from './BudgetHeader'
import CalculatorPage from './CalculatorPage';
import ChecklistPage from './ChecklistPage';

import budgetDB from '../assets/budget_db.json'

export default class BudgetPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            budgetList : budgetDB.budget_list,
            activeBudget : this.props.navigation.state.params.BUDGET_ELEMENT,
            activeTab : "calculator"
        }
    }

    static navigationOptions = {
        headerShown: false,
      };

    goOption = () => {
        const { navigate } = this.props.navigation;
        navigate('OptionPage')
    }

    goHome = () => {
        const { navigate } = this.props.navigation;
        navigate('HomePage')
    }

    setTab = tab => {
        this.setState({
            activeTab: tab
        })
    }

    getTotalPrice = () => {
        let totalPrice = 0
        this.state.activeBudget.budget_items.forEach(item => {
            totalPrice += item.item_price
        })
        return totalPrice
    }

    getTotalCheckedPrice = () => {
        let totalCheckedPrice = 0
        this.state.activeBudget.budget_items.forEach(item => {
            
            if (item.item_checked) totalCheckedPrice += item.item_price
        })
        return totalCheckedPrice
    }

    render(){
        const { navigate } = this.props.navigation;
        return (
            <View style={style.container}>
                <StatusBarComp/>

                <Header title="Budget Calculator" 
                goOptionCB={this.goOption} 
                goHomeCB={this.goHome} />

                <View style={style.wrapper}>

                    <BudgetTabs 
                    activeTab={this.state.activeTab}
                    setTabCB={this.setTab}/>

                    <BudgetHeader 
                    budgetName={this.state.activeBudget.budget_name}
                    totalPrice={this.getTotalPrice()}
                    totalCheckedPrice={this.getTotalCheckedPrice()}/>

                </View>

                <View>
                    <CalculatorPage/>
                    <ChecklistPage/>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container : {
        backgroundColor : "#000000",
        height: "100%",
        flex: 1,
        position: "relative"
    },
    wrapper : {
        marginHorizontal: 10
    }
})