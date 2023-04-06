import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer'
import RootClientTabs from "./ClientTabs";
import { Icon } from "react-native-elements";
import { colors } from "../global/styles";
import BusinessConsoleScreen from "../screens/BusinessConsoleScreen";
import DrawerContect from "../components/DrawerContent";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator(props) {
    // const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator 
            drawerContent={props=><DrawerContect {...props}/>}
        >
            <Drawer.Screen
                name='RootClientTabs'
                component={RootClientTabs}

                options={{
                    title: 'Client',
                    headerShown: false,
                    drawerIcon: ({ focussed, size }) => (
                        <Icon
                            type="material-community"
                            name="home"
                            color={focussed ? '#7cc' : colors.grey2}
                            size={size}

                        />
                    )
                }}
            />

            <Drawer.Screen
                name='BusinessConsoleScreen'
                component={BusinessConsoleScreen}

                options={{
                    title: 'Business Console',
                    headerShown: false,
                    drawerIcon: ({ focussed, size }) => (
                        <Icon
                            type="material"
                            name="business"
                            color={focussed ? '#7cc' : colors.grey2}
                            size={size}

                        />
                    )
                }}
            />
        </Drawer.Navigator>
    )
}