import React, {Component} from 'react'
import StatusBarComp from './StatusBarComp';
import Header from './Header';
import {Text, View, StyleSheet} from 'react-native'

export default class OptionPage extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

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

    render(){
        return(
            <View style={style.container}>
                <StatusBarComp/>

                <Header title="Budget Calculator" 
                goOptionCB={this.goOption} 
                goHomeCB={this.goHome} />
                
                <Text style={style.text}>Options are coming, baby</Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container : {
        backgroundColor: "#000000",
        flex: 1
    },
    text : {
        color: "#fbfbfb",
        fontSize: 48,
        opacity: 0.5,
        fontWeight: "bold",
        fontStyle: "italic",
        textAlign: "center",
        padding: 50
    }
})