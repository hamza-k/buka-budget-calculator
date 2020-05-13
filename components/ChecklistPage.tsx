import React from 'react'
import {View, Text, ScrollView, StyleSheet, Dimensions} from 'react-native'
import { Button } from 'react-native-elements';
import MCIicon from 'react-native-vector-icons/MaterialCommunityIcons';
import Eicon from 'react-native-vector-icons/Entypo';

const ChecklistPage = ({isActive, budget}) =>  (
    <View style={[ style.container, { left: (isActive) ? 0 : "100%"}]}>
        <ScrollView style={{marginBottom: 55}}>
            {
                budget.budget_items.map(element => {
                    return (
                        <View key={element.item_id} style={style.checklistItemContainer}>
                            <MCIicon
                            name={(element.item_checked) ? 'checkbox-blank-circle' : 'checkbox-blank-circle-outline'}
                            style={[style.checklistItemText, {alignSelf: "center"}]}/>
                            <View style={style.checklistItemContents}>
                                <Text style={[style.checklistItemText, style.checklistItemName]}>{element.item_name}</Text>
                                <Text style={[style.checklistItemText, {fontStyle: "italic"}]}>{element.item_price} €</Text>
                            </View>
                        </View>
                    )
                })
            }
        </ScrollView>
        <View style={{position: "absolute", bottom: 0, width: "100%"}}>
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
        buttonStyle={{width: "100%", paddingVertical: 15, backgroundColor: "#303030", borderTopLeftRadius: 10, borderTopRightRadius: 10}}
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
        marginHorizontal: 10,
        alignItems: "stretch"
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
        borderBottomWidth: 2,
        borderBottomColor: "#555555",
        paddingBottom: 5,
        marginBottom: 5,
    }
})