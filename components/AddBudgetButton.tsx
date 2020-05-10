import React from 'react'
import {View, StyleSheet} from 'react-native'
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';

const AddBudgetButton = ({activeModalCB}) => (
    <View style={{position: "absolute", bottom: 0, width: "100%"}}>
        <Button
        icon={
            <Icon
            name="circle-with-plus"
            size={20}
            color="white"
            />
        }
        iconLeft
        title="  Add a new budget"
        titleStyle={{fontSize: 20}}
        buttonStyle={{width: "100%", paddingVertical: 15, backgroundColor: "#303030"}}
        onPress={() => activeModalCB()}
        />
    </View>
)

export default AddBudgetButton

const style = StyleSheet.create({
    modalContainer : {
        position: "absolute", 
        bottom: 0,
        left: 0,
        backgroundColor: "#00000088",
        width : "100%",
        height: "100%"
    }
})