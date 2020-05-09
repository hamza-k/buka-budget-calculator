import React, { Component } from 'react'

import { createAppContainer } from 'react-navigation'
import { createStackNavigator} from 'react-navigation-stack'

import HomePage from './components/HomePage'
import OptionPage from './components/OptionPage'
import BudgetPage from './components/BudgetPage'

// const App = createStackNavigator({
//     FirstPage: { screen: FirstPage }, 
//     SecondPage: { screen: SecondPage }, 
//   },{ initialRouteName: 'FirstPage',}
// );

const App = createStackNavigator({
    HomePage: { screen: HomePage }, 
    OptionPage: { screen: OptionPage }, 
    BudgetPage: { screen: BudgetPage }, 
  },{ initialRouteName: 'HomePage',}
);

export default createAppContainer(App);