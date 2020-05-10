import React, {Component} from 'react'
import StatusBarComp from './StatusBarComp';
import Header from './Header';
import {Text, View} from 'react-native'

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
            <View>
                <StatusBarComp/>
                <Header title="Budget Calculator" isHome={false} goOptionCB={this.goOption} goHomeCB={this.goHome} />
                <Text>Option Page</Text>
            </View>
        )
    }
}