import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import StatusBarComp from './StatusBarComp';
import Header from './Header';
import BudgetList from './BudgetList'
import AddBudgetButton from './AddBudgetButton'
import AddBudgetModal from './AddBudgetModal'
import budgetDB from '../assets/budget_db.json'

export default class HomePage extends Component {

    constructor(props){
        super(props)
        this.state = {
            budgetList : budgetDB.budget_list,
            isModalActive : false
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

    render(){
        const { navigate } = this.props.navigation;
        return (
            <View style={style.container}>
                <StatusBarComp/>
                <Header title="Budget Calculator"/>
                <BudgetList dataList={this.state.budgetList}/>
                <AddBudgetButton activeModalCB={this.toggleModalActive}/>
                <AddBudgetModal exitModalCB={this.toggleModalActive} isActive={this.state.isModalActive}/>
            </View>
        )
        {/* return (
            <View style={style.container}>
                <StatusBarComp/>
                <Header title="Budget Calculator"/>
                <Text>This is the home page</Text>
                <Button 
                    title="Click here for the Calculator Page"
                    onPress={() => 
                        navigate('BudgetPage', {
                            BUDGET_ID : "5"
                    })}/>
            </View>
        ) */}
    }
}

const style = StyleSheet.create({
    container : {
        backgroundColor : "#000000",
        height: "100%",
        flex: 1,
        position: "relative"
    }
})