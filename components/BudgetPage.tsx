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
            activeTab : this.props.navigation.state.params.BUDGET_TAB,
            calculatorOutput : "0"
        }
    }

    // Navigation
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

    // Header
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

    // Calculator
    setCalcInput = (el) => {
        if (this.state.calculatorOutput == '0' || this.state.calculatorOutput == 'Error') {
            this.setState({calculatorOutput : el})
        } else {
            this.setState({calculatorOutput : this.state.calculatorOutput + el})
        }
    }
    setCalcOperator = (el) =>{
        var outputArray = this.state.calculatorOutput.split('')
        if (outputArray[outputArray.length - 1] == '(' && el != "-") {
            outputArray.pop()
            outputArray.pop()
            outputArray.push(el)
        }
        if ( outputArray[outputArray.length - 1] == '+' 
        || outputArray[outputArray.length - 1] == '-' 
        || outputArray[outputArray.length - 1] == '*' 
        || outputArray[outputArray.length - 1] == '/') {
            outputArray.pop()
        }
        outputArray.push(el)
        this.setState({calculatorOutput : outputArray.join('')})

    }
    setInvertOutput = () => {
        let outputArray = this.state.calculatorOutput.split('')
        if (outputArray[0] === '-') {
            outputArray.shift()
        } else {
            outputArray.unshift('-')
        }
        this.setState({calculatorOutput : outputArray.join('')})
    }
    setEraseOutput = () => {
        this.setState({calculatorOutput : '0'})
    }
    setEvalPercentage = () => {
        if (this.state.calculatorOutput / 100 != NaN){
            this.setState({calculatorOutput : (this.state.calculatorOutput / 100).toString()})
        } else {
            this.setState({calculatorOutput : "Error"})
        }
    }
    setEvalOutput = () => {
        this.setState({calculatorOutput : eval(this.state.calculatorOutput).toString()})
    }

    // Latest Item (Calculator Page)
    fetchBudgetLatestItems = () => {
        let result_fetchCalcItem = this.state.activeBudget.budget_items.slice(-4)
        // ! \\ display absolutly 3/4 latest items
        
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

                <View style={{position: "relative"}}>

                    <CalculatorPage 
                    budgetLatestItems={this.fetchBudgetLatestItems}
                    isActive={this.state.activeTab == "calculator"}
                    calcOutput={this.state.calculatorOutput}
                    doCalcInput={this.setCalcInput}
                    doCalcOperator={this.setCalcOperator}
                    doInvertOutput={this.setInvertOutput}
                    doEraseOutput={this.setEraseOutput}
                    doEvalPercentage={this.setEvalPercentage}
                    doEvalOutput={this.setEvalOutput}/>

                    <ChecklistPage 
                    isActive={this.state.activeTab == "checklist"}
                    budget={this.state.activeBudget}/>

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