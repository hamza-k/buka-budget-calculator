import React, { Component } from 'react'
import {View, StyleSheet, Text} from 'react-native'

class ProgressBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            itemList : this.props.itemList
        }
    }

   getTotalCheckedItem = () => {
        let totalCheckedItem = 0
        this.state.itemList.forEach(element => {
            if (element.item_checked){
                totalCheckedItem += element.item_price
            }
        });
        return totalCheckedItem
    }

    getTotalItem = () => {
        let totalItem = 0
        this.state.itemList.forEach(element => {
            totalItem += element.item_price
        });
        return totalItem
    }

    getBarRatio = () => {
        return ( (this.getTotalCheckedItem() / this.getTotalItem() * 100) + "%" )
        }

    render (){
        return(
            <View style={style.barContainer}>
                <View 
                style={[style.barLevel, {width : this.getBarRatio() }]}></View>
            </View>
        )
    }
}
export default ProgressBar

const style = StyleSheet.create({
    barContainer : {
        position: "absolute",
        bottom: 0,
        left: 0,
        width : "100%",
        height: 5,
        backgroundColor: "#eeeeee",
        overflow: "hidden"
    },
    barLevel : {
        backgroundColor: "#ea9453",
        height: "100%",
        position: "absolute", 
        top: 0, 
        left: 0
    }
})