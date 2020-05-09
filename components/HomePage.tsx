import React, {Component} from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'
import StatusBarComp from './StatusBarComp';
import Header from './Header';

export default class HomePage extends Component {
    static navigationOptions = {
        headerShown: false,
    }

    render(){
        const { navigate } = this.props.navigation;
        return (
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
        )
    }
}

const style = StyleSheet.create({
    container : {
        backgroundColor : "#000000",
        height: "100%"
    }
})