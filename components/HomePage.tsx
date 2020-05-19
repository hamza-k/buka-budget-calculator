import React, {Component} from 'react'
import {View, Text, StyleSheet, AsyncStorage} from 'react-native'

import StatusBarComp from './StatusBarComp';
import Header from './Header';
import BudgetList from './BudgetList'
import AddBudgetButton from './AddBudgetButton'
import AddBudgetModal from './AddBudgetModal'
import BudgetElementMenu from './BudgetElementMenu'
import BudgetDeleteConfirmationModal from './BudgetDeleteConfirmationModal'
import BudgetEditConfirmationModal from './BudgetEditConfirmationModal'

import Icon from 'react-native-vector-icons/Entypo';
//import budgetDB from '../assets/budget_db.json'
const storageKey = 'budget_list'

export default class HomePage extends Component {

    constructor(props){
        super(props)
        this.state = {
            budgetList : [] || this.props.navigation.state.params.BUDGET_LIST,
            isModalActive : false,
            isBudgetMenuActive : false,
            isBudgetDeleteModaleActive : false,
            isBudgetEditModaleActive : false,
            activeBudget : {},
            newBudgetName : ""
        }
    }

    static navigationOptions = {
        headerShown: false,
    }

    UNSAFE_componentWillMount(){
        AsyncStorage.getItem(storageKey).then(storedBudgetList => {
            if(storedBudgetList){
                this.setState({budgetList: JSON.parse(storedBudgetList)})
            }
        })
    }

    saveBudgetList = () => {
        AsyncStorage.setItem(storageKey, JSON.stringify(this.state.budgetList))
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
        navigate('BudgetPage', {
            BUDGET_ELEMENT : el, 
            BUDGET_LIST : this.state.budgetList, 
            BUDGET_TAB : "checklist"
        })
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
        }, () => this.saveBudgetList())
    }
    enterBudgetEditModaleActive = () => {
        this.setState({
            isBudgetMenuActive : false,
            isBudgetEditModaleActive : true,
            newBudgetName : this.state.activeBudget.budget_name
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
                        color="#3a3a3a"
                        />
                    </View>
                    <Text style={style.emptyArrayMessage}>Let's start to create a new budget</Text>
                </View>
            )
        }
    }
    changeBudgetNameData = el => {

        this.setState({
            newBudgetName : el
        })
    }
    editBudgetName = () => {
        let newActiveBudget = this.state.activeBudget
        newActiveBudget.budget_name = this.state.newBudgetName
        let newBudgetList = this.state.budgetList
        let indexActiveBudget = this.state.budgetList.findIndex(el => el.budget_id == this.state.activeBudget.budget_id)
        newBudgetList[indexActiveBudget] = newActiveBudget
        this.setState({
            isBudgetEditModaleActive : false,
            budgetList : newBudgetList,
            newBudgetName : ""
        }, () => this.saveBudgetList())
    }
    getNewBudgetName = el => {
        this.setState({
            newBudgetName : el
        })
    }
    createNewBudget = el => {
        let generatedBudgetID = Math.round(Math.random() * 1000000)
        let newBudget = {
            "budget_id" : generatedBudgetID,
            "budget_name" : this.state.newBudgetName,
            "budget_items" : []
        }
        let newBudgetList = this.state.budgetList
        newBudgetList.push(newBudget)
        this.setState({
            isModalActive : false,
            budgetList : newBudgetList,
            newBudgetName : ""
        }, () => this.saveBudgetList())

        const { navigate } = this.props.navigation;
        navigate('BudgetPage', {BUDGET_ELEMENT : newBudget, BUDGET_TAB : el, BUDGET_LIST: this.state.budgetList})
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
                isActive={this.state.isModalActive}
                getNewBudgetNameCB={this.getNewBudgetName}
                createNewBudgetCB={this.createNewBudget}/>

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
                budgetElementValue={this.state.newBudgetName}
                exitModalCB={this.exitBudgetEditModale}
                toConfirmEditCB={this.editBudgetName}
                EditBudgetNameData={this.changeBudgetNameData}/>

            </View>
        )
    }
}

const style = StyleSheet.create({
    container : {
        backgroundColor : "#ffffff",
        height: "100%",
        flex: 1,
        position: "relative"
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
        marginBottom: 58,
        width: "100%",
        alignItems: "center",
        opacity: 0.4
    }
})