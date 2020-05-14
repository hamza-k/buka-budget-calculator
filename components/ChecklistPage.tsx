import React from 'react'
import {View, Text, ScrollView, StyleSheet, Dimensions} from 'react-native'
import { Button } from 'react-native-elements';
import MCIicon from 'react-native-vector-icons/MaterialCommunityIcons';
import Eicon from 'react-native-vector-icons/Entypo';

const ChecklistPage = ({isActive, budget}) =>  (
    <View style={[ style.container, { left: (isActive) ? 0 : "100%"}]}>
        <View style={[style.emptyListContainer, {
            height: (budget.budget_items.length == 0) ? "100%" : 0, 
            marginTop: (budget.budget_items.length == 0) ? 3 : 0,
            paddingTop: (budget.budget_items.length == 0) ? 50 : 0,
            opacity : (budget.budget_items.length == 0) ? 0.4 : 0}]}>
            <View style={{width: "100%", alignItems: "center"}}>
                <Eicon
                name="circle-with-plus"
                size={60}
                color="white"
                />
            </View>
            <Text style={style.emptyArrayMessage}>Let's start to create a new item</Text>
        </View>
        <ScrollView style={{marginBottom: 55}}>
            {
                budget.budget_items.map(element => {
                    return (
                        <View key={element.item_id} style={[style.checklistItemContainer, {
                            opacity : (element.item_checked) ? 0.5 : 1.0
                        }]}>
                            <MCIicon
                            name={(element.item_checked) ? 'checkbox-blank-circle' : 'checkbox-blank-circle-outline'}
                            style={[style.checklistItemText, {alignSelf: "center"}]}/>
                            <View style={style.checklistItemContents}>
                                <Text style={[style.checklistItemText, style.checklistItemName, {
                                    fontStyle: (element.item_name != "" || element.item_checked) ? "normal" : "italic",
                                    fontWeight: (element.item_name != "") ? "bold" : "normal",
                                    opacity : (element.item_name != "") ? 1.0 : 0.5
                                }]}>
                                    {(element.item_name != "") ? element.item_name : "No name here"}
                                </Text>
                                <Text style={[style.checklistItemText, {fontStyle: "italic"}]}>{element.item_price} €</Text>
                            </View>
                        </View>
                    )
                })
            }
        </ScrollView>
        <View style={{position: "absolute", bottom: 0, width: "100%", left: 9}}>
        <Button
        icon={
            <Eicon
            name="circle-with-plus"
            size={20}
            color="white"
            />
        }
        iconLeft
        title="  Add a new item"
        titleStyle={{fontSize: 20}}
        buttonStyle={{width: "100%", padding: 15, backgroundColor: "#303030"}}
        />
    </View>
    </View>
)

export default ChecklistPage

const style = StyleSheet.create({
    container : {
        position: "absolute", 
        top: 0,
        height: Dimensions.get('window').height - 262,
        paddingHorizontal: 10,
        alignItems: "stretch",
        width: "100%"
    },
    checklistItemContainer : {
        backgroundColor: "#202020",
        width: "100%",
        flexDirection: "row",
        padding: 20,
        borderRadius: 6,
        marginTop: 10,
        marginBottom: 20,
    },
    checklistItemContents : {
        paddingHorizontal: 20,
        width: "100%"
    },
    checklistItemText: {
        fontSize: 20,
        color: "#fbfbfb"
    },
    checklistItemName : {
        fontWeight: "bold",
        borderBottomWidth: 1,
        borderBottomColor: "#555555",
        paddingBottom: 5,
        marginBottom: 5,
    },
    emptyArrayMessage : {
        fontSize: 30,
        color: "#fbfbfb",
        textAlign: "center",
        width: "70%",
        marginTop: 10
    },
    emptyListContainer : {
        paddingHorizontal : 10,
        marginTop : 3,
        paddingTop : 50,
        width: "100%",
        alignItems: "center",
        opacity: 0.4
    }
})