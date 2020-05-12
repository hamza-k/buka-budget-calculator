import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'

import StatusBarComp from './StatusBarComp';
import Header from './Header';
import BudgetList from './BudgetList'
import AddBudgetButton from './AddBudgetButton'
import AddBudgetModal from './AddBudgetModal'
import BudgetElementMenu from './BudgetElementMenu'
import BudgetDeleteConfirmationModal from './BudgetDeleteConfirmationModal'
import BudgetEditConfirmationModal from './BudgetEditConfirmationModal'

import Icon from 'react-native-vector-icons/Entypo';
import budgetDB from '../assets/budget_db.json'

export default class HomePage extends Component {

    constructor(props){
        super(props)
        this.state = {
            budgetList : budgetDB.budget_list,
            isModalActive : false,
            isBudgetMenuActive : false,
            isBudgetDeleteModaleActive : false,
            isBudgetEditModaleActive : false,
            activeBudget : {}
        }
    }

    static navigationOptions = {
        headerShown: false,
    }

    toggleModalActive = () => {
        this.setState({
            isModalActive : !this.state.isModalActive
        })
    }

    goOption = () => {
        const { navigate } = this.props.navigation;
        navigate('OptionPage')
    }

    goHome = () => {
        const { navigate } = this.props.navigation;
        navigate('HomePage')
    }

    toggleBudgetElementMenu = (el) => {
        let newActiveBudget = el
        this.setState({
            isBudgetMenuActive : true,
            activeBudget : newActiveBudget
        })
    }

    exitBudgetElementMenu = () => {
        this.setState({isBudgetMenuActive : false})
    }

    goBudgetPage = (el) => {
        const { navigate } = this.props.navigation;
        navigate('BudgetPage', {BUDGET_ELEMENT : el})
    }

    enterBudgetDeleteModaleActive = () => {
        this.setState({
            isBudgetDeleteModaleActive: true,
            isBudgetMenuActive : false
            })
    }

    exitBudgetDeleteModale = () => {
        this.setState({
            isBudgetDeleteModaleActive: false
            })
    }

    deleteBudget = (el) => {
        let newBudgetList = this.state.budgetList.filter(item => item.budget_id != el.budget_id)
        this.setState({
            budgetList : newBudgetList,
            isBudgetDeleteModaleActive: false
        })
    }

    enterBudgetEditModaleActive = () => {
        this.setState({
            isBudgetMenuActive : false,
            isBudgetEditModaleActive : true
        })
    }

    exitBudgetEditModale = () => {
        this.setState({
            isBudgetEditModaleActive: false
            })
    }

    getBudgetList = () => {
        if (this.state.budgetList.length > 0) {
            return (
                <BudgetList 
                dataList={this.state.budgetList} 
                setBudgetElementMenu={this.toggleBudgetElementMenu}
                setBudgetPage={this.goBudgetPage}/>
            )
        } else {
            return (
                <View style={style.emptyListContainer}>
                    <View style={{width: "100%", alignItems: "center"}}>
                        <Icon
                        name="circle-with-plus"
                        size={60}
                        color="white"
                        />
                    </View>
                    <Text style={style.emptyArrayMessage}>Let's start to create a new budget</Text>
                </View>
            )
        }
    }

    changeBudgetNameData = el => {
        let newCurrentBudget = this.state.activeBudget
        newCurrentBudget.budget_name = el
        this.setState({
            activeBudget : newCurrentBudget
        })
    }

    render(){
        const { navigate } = this.props.navigation;
        return (
            <View style={style.container}>
                <StatusBarComp/>

                <Header title="Budget Calculator" 
                isHome 
                goOptionCB={this.goOption} 
                goHomeCB={this.goHome} />

                {this.getBudgetList()}

                <AddBudgetButton 
                activeModalCB={this.toggleModalActive}/>

                <AddBudgetModal 
                exitModalCB={this.toggleModalActive} 
                isActive={this.state.isModalActive}/>

                <BudgetElementMenu 
                isActive={this.state.isBudgetMenuActive}
                budgetElement={this.state.activeBudget}
                exitModalCB={this.exitBudgetElementMenu}
                toConfirmDeleteCB={this.enterBudgetDeleteModaleActive}
                toConfirmeEditCB={this.enterBudgetEditModaleActive}/>

                <BudgetDeleteConfirmationModal 
                isActive={this.state.isBudgetDeleteModaleActive} 
                budgetElement={this.state.activeBudget}
                exitModalCB={this.exitBudgetDeleteModale}
                toConfirmDeleteCB={this.deleteBudget}/>

                <BudgetEditConfirmationModal
                isActive={this.state.isBudgetEditModaleActive} 
                budgetElement={this.state.activeBudget}
                exitModalCB={this.exitBudgetEditModale}
                toConfirmEditCB={this.editBudget}
                EditBudgetNameData={this.changeBudgetNameData}/>

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
    emptyArrayMessage : {
        fontSize: 30,
        color: "#fbfbfb",
        textAlign: "center",
        width: "70%",
        marginTop: 10
    },
    emptyListContainer : {
        paddingHorizontal : 10,
        marginTop : 3,
        paddingTop : 50,
        marginBottom: 58,
        width: "100%",
        alignItems: "center",
        opacity: 0.4
    }
})