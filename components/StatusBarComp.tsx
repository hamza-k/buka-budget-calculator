import React from 'react'
import {StatusBar} from 'react-native'
import {darkThemeColor} from '../assets/colors.js'

var colors = darkThemeColor

const StatusBarComp = () => (
    <StatusBar backgroundColor={colors.background} barStyle='light-content'/>
)

export default StatusBarComp
