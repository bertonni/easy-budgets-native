import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { IncomeStackParamList } from "../@types/types";
import AddIncome from "../components/Incomes/AddIncome";
import ViewIncomes from "../components/Incomes/ViewIncomes";

const Tab = createMaterialBottomTabNavigator<IncomeStackParamList>();

const Incomes = () => {
  return (
    <Tab.Navigator
      barStyle={{
        backgroundColor: "#2f2f28",
        paddingBottom: 8,
      }}
      screenOptions={({ route }) => ({
        tabBarLabel:
          route.name == "Add" ? "Adicionar Receita" : "Ver Receitas",
        tabBarIcon: ({ focused, color }) => {
          let iconName: string = "";

          if (route.name === "Add") iconName = "currency-usd";
          else if (route.name === "View") iconName = "clipboard-list-outline";

          return (
            <MaterialCommunityIcons name={iconName} size={26} color={color} />
          );
        },
      })}
    >
      <Tab.Screen name="Add" component={AddIncome} />
      <Tab.Screen name="View" component={ViewIncomes} />
    </Tab.Navigator>
  );
};

export default Incomes;
