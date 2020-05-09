import React, {Component} from 'react'
import {Text, View} from 'react-native'

export default class OptionPage extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return(
            <View>
                <StatusBarComp/>
                <Text>Option Page</Text>
            </View>
        )
    }
}