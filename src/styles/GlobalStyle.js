import React from 'react';
import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: "white",
        marginTop: 20,
        alignItems: "center"
    },
    datexLogo: {
        marginTop: 100
    },
    globalTxt: {
        marginTop: 20,
        fontSize: 24,
    },
    main: {
        flex: 1,
        backgroundColor: "#fff",
        marginTop: 80,
        width: "90%",
        alignContent: "center",
    },
    LoginForm: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    checkBox: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        alignSelf: "flex-start",
        marginTop: 20,

    },
    textInput: {
        alignSelf: "center",
        marginVertical: 120,

    },
    scrollView: {
        width: "90%",
        marginTop: 70,
        backgroundColor: "#fff",
        borderRadius: 5,
        elevation: 8,
        paddingHorizontal: 10


    },
    globalBtn: {
        width: "70%",
        alignSelf: "center",
        height: 60,
        justifyContent: "center",
        alignContent: "center",
        fontSize: 24,
        marginTop: 70,
    },
    cards: {
        width: "80%",
        borderRadius: 5,
        backgroundColor: "#fff",
        elevation: 10,

    },
    textLine: {
        flexDirection: "row",

    },
    cardTitle:{
        fontSize:24,
        color:"black",
        textAlign:'right'
    },
    cardText:{
        fontSize:18,
        color:"gray",
        textAlign:'right'
    },

})