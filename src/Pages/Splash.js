import React from 'react';
import { View, Text, StatusBar, Image } from "react-native";
import { styles } from '../styles/GlobalStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import {
    GetUserName,
    GetPassword,
    GetInfo
} from '../redux/actions';


const Splash = (props) => {
    const dispatch = useDispatch();


    const addInfo = async (value1, value2) => {
        try {
            dispatch(GetUserName([value1]));
            dispatch(GetPassword([value2]));

        } catch (e) {
            console.log(e)
        }
    }

    React.useEffect(() => {
        getData()

    }, [])


    const getData = async () => {
        try {
            const username = await AsyncStorage.getItem("userName")
            const password = await AsyncStorage.getItem("Password")
            if (password == null) {
                // Deleted
            } else {
                addInfo(username, password)
            }
        } catch (error) {
            console.log("error splash- getData", error)
        }

        props.navigation.navigate("Login")
    }




    return (
        <View style={styles.body}>
            <StatusBar backgroundColor="#FFA500" />
            <Image style={styles.datexLogo} source={require('../assets/photos/fa_background-header.png')} />
            <Text style={styles.globalTxt}>
                به داتکس خوش آمدید.
            </Text>
        </View>

    );
}

export default Splash;