import React, {Component} from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'
import StatusBarComp from './StatusBarComp';
import Header from './Header';
import BudgetTabs from './BudgetTabs'
import BudgetHeader from './BudgetHeader'
import CalculatorPage from './CalculatorPage';
import ChecklistPage from './ChecklistPage';
import AddItemModal from './AddItemModal'
import ItemElementMenu from './ItemElementMenu'

import budgetDB from '../assets/budget_db.json'

export default class BudgetPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            budgetList : budgetDB.budget_list,
            activeBudget : this.props.navigation.state.params.BUDGET_ELEMENT,
            activeTab : this.props.navigation.state.params.BUDGET_TAB,
            latestBudgetItems : [],
            calculatorOutput : "0",
            isReadyToClearOutput : true,
            newItemName : "",
            newItemPrice : 0.00,
            isAddItemModalActive : false,
            activeItem : {},
            isItemElementMenuActive : false
        }
    }

    // Navigation
    static navigationOptions = {
        headerShown: false,
      }

    goOption = () => {
        const { navigate } = this.props.navigation;
        navigate('OptionPage')
    }
    goHome = () => {
        const { navigate } = this.props.navigation;
        navigate('HomePage')
    }
    UNSAFE_componentWillMount(){
        let result_fetchCalcItem = this.state.activeBudget.budget_items.slice(-3) || []
        this.state.latestBudgetItems = result_fetchCalcItem
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
        if (this.state.calculatorOutput == '0' 
        || this.state.calculatorOutput == 'Error'
        || this.state.isReadyToClearOutput) {
            this.setState({
                calculatorOutput : el,
                isReadyToClearOutput : false
                })
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
        this.setState({
            calculatorOutput : outputArray.join(''),
            isReadyToClearOutput: false
        })

    }
    setInvertOutput = () => {
        let outputArray = this.state.calculatorOutput.split('')
        if (outputArray[0] === '-') {
            outputArray.shift()
        } else {
            outputArray.unshift('-')
        }
        this.setState({
            calculatorOutput : outputArray.join(''),
            isReadyToClearOutput: false
        })
    }
    setEraseOutput = () => {
        this.setState({
            calculatorOutput : '0',
            isReadyToClearOutput: true
        })
    }
    setEvalPercentage = () => {
        if (this.state.calculatorOutput / 100 != NaN){
            this.setState({
                calculatorOutput : (this.state.calculatorOutput / 100).toString(),
                isReadyToClearOutput: true
                })
        } else {
            this.setState({
                calculatorOutput : "Error",
                isReadyToClearOutput: true
            })
        }
    }
    setEvalOutput = () => {

        let output = Math.round(eval(this.state.calculatorOutput), 2)
        let newItem = {
            "item_id" : Math.round(Math.random() * 1000000),
            "item_name" : "",
            "item_price" : output,
            "item_checked" : false
        }
        let indexActiveBudget = this.state.budgetList.findIndex( el => el.budget_id == this.state.activeBudget.budget_id)
        let newActiveBudget = this.state.activeBudget
        newActiveBudget.budget_items.push(newItem)
        let newBudgetList = this.state.budgetList
        newBudgetList[indexActiveBudget] = newActiveBudget

        let result_fetchCalcItem = newActiveBudget.budget_items.slice(-3) || []

        this.setState({
            calculatorOutput : output.toString(),
            isReadyToClearOutput: true,
            activeBudget : newActiveBudget,
            budgetList : newBudgetList,
            latestBudgetItems : result_fetchCalcItem
        })
    }



    // Latest Item (Calculator Page)
    fetchBudgetLatestItems = () => {
        let result_fetchCalcItem = this.state.activeBudget.budget_items.slice(-4)
        this.setState({latestBudgetItems : result_fetchCalcItem})
        console.log(this.state.latestBudgetItems)
    }

    // CRUD
    ///// Update the whole budget list
    getNewItemName = el => {
        this.setState({
            newItemName : el
        })
    }
    getNewItemPrice = el => {
        let newPrice = eval(el)
        this.setState({
            newItemPrice : Math.round(newPrice * 100) / 100
        })
    }
    createNewItem = () => {
        let newItem = {
            "item_id" : Math.round(Math.random() * 1000000),
            "item_name" : this.state.newItemName,
            "item_price" : this.state.newItemPrice,
            "item_checked" : false
        }
        let indexActiveBudget = this.state.budgetList.findIndex( el => el.budget_id == this.state.activeBudget.budget_id)
        let newActiveBudget = this.state.activeBudget
        newActiveBudget.budget_items.push(newItem)
        let newBudgetList = this.state.budgetList
        newBudgetList[indexActiveBudget] = newActiveBudget

        let result_fetchCalcItem = newActiveBudget.budget_items.slice(-3) || []

        this.setState({
            isAddItemModalActive: false,
            activeBudget : newActiveBudget,
            budgetList : newBudgetList,
            latestBudgetItems : result_fetchCalcItem,
            newItemName : "",
            newItemPrice : 0.0
        })
    }
    GiveCheckOnIt = el => {
        el.item_checked = !el.item_checked

        let newActiveBudget = this.state.activeBudget
        let indexActiveItem = newActiveBudget.budget_items.findIndex(e => e.item_id == el.item_id)
        newActiveBudget.budget_items[indexActiveItem] = el

        let newBudgetList = this.state.budgetList
        let indexActiveBudget = newBudgetList.findIndex(e => e.budget_id == newActiveBudget.budget_id)
        newBudgetList[indexActiveBudget] = newActiveBudget
        this.setState({
            activeBudget : newActiveBudget,
            budgetList : newBudgetList
        })
        console.log(newBudgetList)
    }

    // Modals
    ///// Open Add Item Modal
    openAddItemModal = () => {
        this.setState({
            isAddItemModalActive : true
        })
    }
    closeAddItemModal = () => {
        this.setState({
            isAddItemModalActive : false
        })
    }
    OpenItemMenu = el => {
        this.setState({
            isItemElementMenuActive : true,
            activeItem : el
        })
    }
    exitItemMenu = () => {
        this.setState({
            isItemElementMenuActive : false
        })
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
                    doEvalOutput={this.setEvalOutput}
                    latestBudgetItems={this.state.latestBudgetItems}/>

                    <ChecklistPage 
                    isActive={this.state.activeTab == "checklist"}
                    budget={this.state.activeBudget}
                    openAddItemModalCB={this.openAddItemModal}
                    getNewItemPriceCB={this.getNewItemPrice}
                    openItemMenuCB={this.OpenItemMenu}
                    GiveCheckOnItCB={this.GiveCheckOnIt}/>

                </View>

                <AddItemModal 
                isActive={this.state.isAddItemModalActive}
                closeAddItemModalCB={this.closeAddItemModal}
                createNewItemCB={this.createNewItem}
                getNewItemNameCB={this.getNewItemName}
                getNewItemPriceCB={this.getNewItemPrice}
                createNewItemCB={this.createNewItem}
                defaultNewNameValue={this.state.newItemName}
                defaultNewPriceValue={this.state.newItemPrice}/>

                <ItemElementMenu
                isActive={this.state.isItemElementMenuActive}
                itemElement={this.state.activeItem}
                exitModalCB={this.exitItemMenu}/>
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