import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import ProgressBar from './ProgressBar'
import Icon from 'react-native-vector-icons/Entypo';

class BudgetListElement extends Component {
    constructor (props){
        super(props)
        this.state = {
            dataElement : this.props.dataElement
        }
    }

    getTotalCheckedItem = () => {
        let totalCheckedItem = 0
        this.state.dataElement.budget_items.forEach(element => {
            if (element.item_checked){
                totalCheckedItem += element.item_price
            }
        });
        return totalCheckedItem
    }

    getTotalItem = () => {
        let totalItem = 0
        this.state.dataElement.budget_items.forEach(element => {
            totalItem += element.item_price
        });
        return totalItem
    }

    isAllCompleted = () => {
        if (this.getTotalItem() == this.getTotalCheckedItem() && this.getTotalItem() != 0 ) {
            return (
                <View style={{position: "absolute", right: -25, top: -25, opacity: 0.1}}>
                    <Icon name="check" size={100} color="#3a3a3a" />
                </View>
            )
        }
    }

    getBudgetName = () => {
        if (this.state.dataElement.budget_name != "") {
            return [{fontWeight: "bold"}, this.state.dataElement.budget_name,]
        } else {
            return [{ fontStyle: "italic" , opacity : 0.5}, "No name here"]
        }
    }

    render(){
        const {dataElement} = this.state

        return (
            <View style={style.container}>
                {this.isAllCompleted()}
                <Text style={[style.title, this.getBudgetName()[0]]}>{this.getBudgetName()[1]}</Text>
                <View style={{flexDirection : 'row', paddingTop: 10, alignItems : "flex-end", marginBottom: 20, marginHorizontal: 20}}>
                    <Text style={style.pricingTag}>Progress : </Text>
                    <Text style={style.pricingCheckedTag}>{Math.round(this.getTotalCheckedItem() * 100 ) / 100} €</Text>
                    <Text style={style.pricingTag}> / {Math.round(this.getTotalItem() * 100 ) / 100} €</Text>
                </View>
                <ProgressBar itemList={dataElement.budget_items}/>
            </View>
        )
    }
}

export default BudgetListElement

const style = StyleSheet.create({
    container : {
        backgroundColor : "#ffffff",
        borderRadius : 6,
        marginBottom : 30,
        marginTop : 10,
        marginHorizontal: 10,
        position : "relative",
        overflow: "hidden",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        
        elevation: 7,
    },
    title : {
        color : "#3a3a3a",
        fontSize : 20,
        borderBottomWidth : 1,
        borderBottomColor : "#3a3a3a",
        paddingBottom : 10,
        marginTop: 20,
        marginHorizontal: 20
    },
    pricingTag : {
        fontSize : 18,
        color : "#3a3a3a",
        fontStyle: "italic"
    },
    pricingCheckedTag : {
        fontSize : 22,
        color : "#3a3a3a",
        marginLeft : 20,
        fontWeight : "bold"
    }
})