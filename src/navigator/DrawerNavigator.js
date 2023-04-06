import React from "react";
import {createDrawerNavigator} from '@react-navigation/drawer'
import RootClientTabs from "./ClientTabs";
import { Icon } from "react-native-elements";
import { colors } from "../global/styles";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator(){
    // const Drawer = createDrawerNavigator();
    return(
        <Drawer.Navigator>
            <Drawer.Screen
                name = 'RootClientTabs'
                component = {RootClientTabs}

                options = {{
                    title:'Client',
                    headerShown:false,
                    drawerIcon: ({focussed,size}) =>(
                        <Icon 
                            type = "material-community"
                            name = "home"
                            color = {focussed ? '#7cc' :colors.grey2}
                            size = {size}

                        />
                    )
                }}
            />
        </Drawer.Navigator>
    )
}