import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react'
import AddExpense from '../components/Expenses/AddExpense';
import ViewExpenses from '../components/Expenses/ViewExpenses';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ExpenseStackParamList } from '../@types/types';

const Tab = createMaterialBottomTabNavigator<ExpenseStackParamList>();

const Expenses = () => {
  return (
    <Tab.Navigator
      barStyle={{
        backgroundColor: '#2f2f28',
        paddingBottom: 8
      }}
      screenOptions={({ route }) => ({
        tabBarLabel: route.name == "Add" ? "Adicionar Despesa" : "Ver Despesas",
        tabBarIcon: ({ focused, color }) => {
          let iconName: string = '';

          if (route.name === "Add") iconName = "cash";
          else if (route.name === "View") iconName = "cash-multiple";

          return <MaterialCommunityIcons name={iconName} size={26} color={color} />
        }
      })}
    >
      <Tab.Screen name="Add" component={AddExpense} />
      <Tab.Screen name="View" component={ViewExpenses} />
    </Tab.Navigator>
  )
}

export default Expenses;