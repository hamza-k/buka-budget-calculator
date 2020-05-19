import React from 'react'
import {View, StyleSheet} from 'react-native'
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';

const AddBudgetButton = ({activeModalCB}) => (
    <View style={style.container}>
        <Button
        icon={
            <Icon
            name="circle-with-plus"
            size={20}
            color="#ffffff"
            />
        }
        title="  Add a new budget"
        titleStyle={{fontSize: 20, color: "#ffffff"}}
        containerStyle={style.btnContainerStyle}
        buttonStyle={style.buttonStyle}
        onPress={() => activeModalCB()}
        />
    </View>
)

export default AddBudgetButton

const style = StyleSheet.create({
    container : {
        padding: 10,
        position: "absolute", 
        bottom: 0, 
        width: "100%"
    },
    btnContainerStyle: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -4,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,},
    buttonStyle : {
        elevation: 7,
        width: "100%", 
        paddingVertical: 15, 
        backgroundColor: "#ea9453",
    }
})