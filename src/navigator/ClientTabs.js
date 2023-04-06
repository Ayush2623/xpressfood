import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from "react-native-elements";
import HomeScreen from "../screens/HomeScreen";
import { colors } from "../global/styles";
import MyAccountScreen from "../screens/MyAccountScreen";
import MyOrderScreen from "../screens/MyOrdersScreen";
import SearchScreen from "../screens/SearchScreen";

const ClientTabs = createBottomTabNavigator();

export default function RootClientTabs() {
    return (
        <ClientTabs.Navigator
        screenOptions={{
            tabBarActiveTintColor: colors.buttons,
          }}
        >
            <ClientTabs.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={
                    {
                        headerShown:false,
                        tabBarLabel: "Home",
                        tabBarIcon: ({ color, size }) => (
                            <Icon
                                name='home'
                                type='material'
                                color={color}
                                size={size}
                            />
                        )
                    }
                }

            />


            <ClientTabs.Screen
                name="SearchScreen"
                component={SearchScreen}
                options={
                    {
                        tabBarLabel: "Search",
                        tabBarIcon: ({ color, size }) => (
                            <Icon
                                name='search'
                                type='material'
                                color={color}
                                size={size}
                            />
                        )
                    }
                }

            />


            <ClientTabs.Screen
                name="MyOrdersScreen"
                component={MyOrderScreen}
                options={
                    {
                        tabBarLabel: "My Orders",
                        tabBarIcon: ({ color, size }) => (
                            <Icon
                                name='view-list'
                                type='material'
                                color={color}
                                size={size}
                            />
                        )
                    }
                }

            />


            <ClientTabs.Screen
                name="MyAccount"
                component={MyAccountScreen}
                options={
                    {
                        tabBarLabel: "My Account",
                        tabBarIcon: ({ color, size }) => (
                            <Icon
                                name='person'
                                type='material'
                                color={color}
                                size={size}
                            />
                        )
                    }
                }

            />
        </ClientTabs.Navigator>
    )
}