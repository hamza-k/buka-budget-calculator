import React, {Component} from 'react'
import {View, Text, Button} from 'react-native'
import StatusBarComp from './StatusBarComp';
import CalculatorPage from './CalculatorPage';
import ChecklistPage from './ChecklistPage';

export default class BudgetPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            budgetID : this.props.navigation.state.params.BUDGET_ID
        }
    }

    static navigationOptions = {
        headerShown: false,
      };

    render(){
        const { navigate } = this.props.navigation;
        return (
            <View>
                <StatusBarComp/>
                <Text>Here is the parsed ID number {this.state.budgetID}</Text>
                <Button 
                    title="Click here to go back to home"
                    onPress={() => navigate('HomePage')}/>
                <CalculatorPage/>
                <ChecklistPage/>
            </View>
        )
    }
}