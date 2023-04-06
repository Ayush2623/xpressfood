import React, { useState, useContext, useEffect } from "react";
import { View, Text, Linking, Pressable, Alert, Switch, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { Avatar, Button, Icon } from "react-native-elements";
import { colors } from "../global/styles";

export default function DrawerContect(props) {
    return (

        <View style={styles.container}>
            <DrawerContentScrollView {...props}>
                <View style={{ backgroundColor: colors.buttons }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 10, paddingVertical: 10 }}>
                        <Avatar
                            rounded
                            avatarStyle={styles.avatar}
                            source={{ uri: "https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png" }}
                            size={75}
                        />

                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontWeight: 'bold', color: colors.pagebackground, fontSize: 18 }}>Ayush Tiwari</Text>
                            <Text style={{ color: colors.pagebackground, fontSize: 14 }}>tiwari.ayush.1010@gmail.com</Text>
                        </View>



                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 10 }}>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center', marginleft: 10 }}>
                                <Text style={{ fontWeight: 'bold', color: colors.pagebackground, fontSize: 18 }}>1</Text>
                                <Text style={{ color: colors.pagebackground, fontSize: 14 }}>My Favorites</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center', marginleft: 10 }}>
                                <Text style={{ fontWeight: 'bold', color: colors.pagebackground, fontSize: 18 }}>1</Text>
                                <Text style={{ color: colors.pagebackground, fontSize: 14 }}>My Favorites</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <DrawerItemList {...props} />

                <DrawerItem
                    label="Payment"
                    icon={({ color, size }) => (
                        <Icon
                            type="material-community"
                            name="credit-card-outline"
                            color={color}
                            size={size}
                        />
                    )}
                />

                <DrawerItem
                    label="Promotions"
                    icon={({ color, size }) => (
                        <Icon
                            type="material-community"
                            name="tag-heart"
                            color={color}
                            size={size}
                        />
                    )}
                />

                <DrawerItem
                    label="Settings"
                    icon={({ color, size }) => (
                        <Icon
                            type="material-community"
                            name="cog-outline"
                            color={color}
                            size={size}
                        />
                    )}
                />

                <DrawerItem
                    label="Help"
                    icon={({ color, size }) => (
                        <Icon
                            type="material-community"
                            name="lifebuoy"
                            color={color}
                            size={size}
                        />
                    )}
                />

                <View
                    style={{
                        borderBottomColor: '#bdc6cf',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                    }}
                />

                <View style={{ borderWidth: 0, borderTopColor: colors.grey5 }}>
                    <Text style={styles.preferences}>Preferences</Text>

                    <View style={styles.switchText}>
                        <Text style={styles.darkThemeText}>Dark Theme</Text>
                        <View>
                            <Switch
                                trackColor={{ false: '#767577', true: '#81b0ff' }}
                                thumbColor={'#f4f3f4'}
                            />
                        </View>
                    </View>
                </View>

                </DrawerContentScrollView>

                <View
                    style={{
                        borderBottomColor: '#bdc6cf',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                    }}
                />
                
                <DrawerItem
                    label="Sign Out"
                    icon={({ color, size }) => (
                        <Icon
                            type="material-community"
                            name="logout-variant"
                            color={color}
                            size={size}
                        />
                    )}
                />

            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    avatar: {
        borderWidth: 4,
        borderColor: colors.pagebackground,
    },

    preferences: {
        fontSize: 16,
        color: colors.grey2,
        paddingTop: 10,
        paddingLeft: 20
    },

    switchText: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingVertical: 15,
        paddingRight: 10
    },

    darkThemeText: {
        fontSize: 16,
        color: colors.grey2,
        paddingTop: 10,
        paddingLeft: 0,
        fontWeight: 'bold'
    }
})