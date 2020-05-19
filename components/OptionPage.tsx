import React, {Component} from 'react'
import StatusBarComp from './StatusBarComp';
import Header from './Header';
import {Text, View, StyleSheet, Image} from 'react-native'
import HKLogo from '../assets/hk-logo.jpg'

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

                <Header 
                goOptionCB={this.goOption} 
                goHomeCB={this.goHome} />
                <View style={style.aboutContainer}>
                    <Text style={style.text}>© BuKa - Budget Calculator</Text>
                    <Text style={{textAlign: "center", fontSize: 20, fontStyle: "italic"}}>by Hamza KHADRI</Text>
                    <Text style={{textAlign: "center", fontSize: 16, fontStyle: "italic"}}>Powered with React Native, Expo and React Native Elements</Text>
                    <View style={{flexDirection: "row", justifyContent: "space-evenly", marginTop: 20}}>
                        <Text style={{fontStyle: 'italic', opacity: 0.7}}>github.com/hamza-k</Text>
                        <Text style={{fontStyle: 'italic', opacity: 0.7}}>hamzakhadri.com</Text>
                    </View>
                    <Image source={HKLogo} style={style.logo}/>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container : {
        backgroundColor: "#ffffff",
        flex: 1
    },
    text : {
        color: "#3a3a3a",
        fontSize: 24,
        fontWeight: "bold",
        fontStyle: "italic",
        textAlign: "center",
    },
    aboutContainer : {
        marginHorizontal: 10,
        marginTop: 30,
        marginBottom: 50
    },
    logo : {
        height: 70,
        width: 112,
        alignSelf: "center",
        marginTop: 50
    }
})