import * as React from "react";
import InicioNavigator from "./Inicio/InicioNavigator";
import EventosNavigator from "./Eventos/EventosNavigator";
import GroupsNavigator from "./Grupos/GroupsNavigator";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import IZIMoneyNavigator from "./IZIMoney/IZIMoneyNavigator";
import PerfilNavigator from "./Perfil/PerfilNavigator";

const Navigator = () => {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <Tab.Navigator
      shifting={false}
      activeColor="#222831"
      inactiveColor="#EEEEEE"
    >
      <Tab.Screen
        name="Home"
        component={InicioNavigator}
        options={{
          tabBarLabel: "Inicio",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Groups"
        component={GroupsNavigator}
        options={{
          tabBarLabel: "Grupos",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-group"
              color={color}
              size={22}
            />
          ),
        }}
      />
      <Tab.Screen
        name="IZIMoney"
        component={IZIMoneyNavigator}
        options={{
          tabBarLabel: "IZIMoney",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="view-dashboard"
              color={color}
              size={22}
            />
          ),
        }}
      />
      <Tab.Screen
        name="EventosNavigator"
        component={EventosNavigator}
        options={{
          tabBarLabel: "Eventos",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="calendar-blank"
              color={color}
              size={22}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={PerfilNavigator}
        options={{
          tabBarLabel: "Perfil",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-circle"
              color={color}
              size={22}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default Navigator;
