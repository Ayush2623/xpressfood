import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, Dimensions, TextInput, Image } from 'react-native'
import { colors, parameters, title } from "../../global/styles";
import { Icon, Button, SocialIcon } from "react-native-elements";
import Swiper from 'react-native-swiper';

export default function SignInWelcomeScreen({navigation}) {

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 3.3, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 20 }}>
                <Text style={{ fontSize: 26, color: colors.buttons, fontWeight: 'bold' }}>DISCOVER RESTAURANTS</Text>
                <Text style={{ fontSize: 26, color: colors.buttons, fontWeight: 'bold' }}>IN YOUR AREA</Text>
            </View>

            <View style={{ flex: 4, justifyContent: 'center' }}>
                <Swiper autoplay={true}>
                    <View style={styles.slide}>
                        <Image
                            source={{ uri: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg" }}
                            style={{ height: "100%", width: "100%" }}
                        />
                    </View>

                    <View style={styles.slide}>
                        <Image
                            source={{ uri: "https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" }}
                            style={{ height: "100%", width: "100%" }}
                        />
                    </View>


                    <View style={styles.slide}>
                        <Image
                            source={{ uri: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" }}
                            style={{ height: "100%", width: "100%" }}
                        />
                    </View>

                    <View style={styles.slide}>
                        <Image
                            source={{ uri: "https://images.unsplash.com/photo-1481931098730-318b6f776db0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" }}
                            style={{ height: "100%", width: "auto" }}
                        />
                    </View>

                </Swiper>
            </View>

            <View style={{ flex: 4.9, justifyContent: 'flex-end', marginBottom: 20 }}>



                <View style={{ marginBottom: 20 }}>

                    <View style={{ marginHorizontal: 20, marginTop: 30 }}>
                        <Button
                            title="SIGN IN"
                            buttonStyle={parameters.styledButton}
                            titleStyle={parameters.buttonTitle}
                            onPress={() => {
                                navigation.navigate("SignInScreen")
                            }}

                        />
                    </View>
                    <View style={{ marginHorizontal: 20, marginTop: 20 }}>
                        <Button
                            title="Create an account"
                            buttonStyle={styles.createButton}
                            titleStyle={styles.createButtonTitle}
                        />
                    </View>

                </View>
            </View>
        </View>

    )
}


const styles = StyleSheet.create({

    slide: {
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },

    createButton: {
        backgroundColor: "white",
        alignContent: "center",
        justifyContent: "center",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#ff8c52",
        height: 45,
        paddingHorizontal: 20,
        borderColor: colors.buttons,
    },

    createButtonTitle: {
        color: colors.buttons,
        fontSize: 20,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
        marginTop: -3
    }

})

