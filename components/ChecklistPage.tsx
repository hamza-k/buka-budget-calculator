import React from 'react'
import {View, Text, ScrollView, StyleSheet, Dimensions, TouchableOpacity} from 'react-native'
import { Button } from 'react-native-elements';
import MCIicon from 'react-native-vector-icons/MaterialCommunityIcons';
import Eicon from 'react-native-vector-icons/Entypo';
import { RFValue } from "react-native-responsive-fontsize";


const ChecklistPage = ({
    isActive, 
    budget, 
    openAddItemModalCB,
    openItemMenuCB,
    GiveCheckOnItCB
    }) =>  (
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
                        <TouchableOpacity 
                        onPress={() => GiveCheckOnItCB(element)} 
                        onLongPress={() => openItemMenuCB(element)} 
                        activeOpacity={1} key={element.item_id} 
                        style={[style.checklistItemContainer, {}]}>
                            <MCIicon
                            name={(element.item_checked) ? 'checkbox-marked-circle' : 'checkbox-blank-circle-outline'}
                            style={[style.checklistItemText, {alignSelf: "center", color: "#ea9453", fontSize: 20}]}/>
                            <View style={style.checklistItemContents}>
                                <Text style={[style.checklistItemText, style.checklistItemName, {
                                    fontWeight: (element.item_name != "") ? "bold" : "normal",
                                    opacity : (element.item_name != "") ? 1.0 : 0.5
                                }]}>
                                    {(element.item_name != "") ? element.item_name : "No name here"}
                                </Text>
                                <Text style={[style.checklistItemText, {fontStyle: "italic"}]}>{element.item_price} €</Text>
                            </View>
                        </TouchableOpacity>
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
        buttonStyle={{width: "100%", padding: 15, backgroundColor: "#ea9453"}}
        onPress={() => openAddItemModalCB()}
        />
    </View>
    </View>
)

export default ChecklistPage

const style = StyleSheet.create({
    container : {
        position: "absolute", 
        top: 0,
        height: Dimensions.get('window').height - 247,
        paddingHorizontal: 10,
        alignItems: "stretch",
        width: "100%"
    },
    checklistItemContainer : {
        width: "100%",
        flexDirection: "row",
        padding: 20,
        borderRadius: 6,
        marginTop: 5,
        marginBottom: 5
    },
    checklistItemContents : {
        paddingHorizontal: 20,
        width: "100%"
    },
    checklistItemText: {
        fontSize: RFValue(20),
        color: "#3a3a3a"
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
        color: "#3a3a3a",
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