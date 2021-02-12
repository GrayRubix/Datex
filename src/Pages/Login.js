import React from 'react'
import { Image, View, Text, ImageBackground, StatusBar, KeyboardAvoidingView, ScrollView } from "react-native";
import { styles } from '../styles/GlobalStyle';
import { I18nManager } from 'react-native';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

// CheckBox
import { Checkbox } from 'react-native-paper';
// Button
import { Button } from 'react-native-paper';
// Input
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput } from 'react-native-paper';
// RTL Input
I18nManager.allowRTL(true)
I18nManager.forceRTL(true)


const Login = (props) => {
    const [rememberMe, setChecked] = React.useState(true)
    const [userName, setUserName] = React.useState()
    const [password, setPassword] = React.useState()
    const userNameR = useSelector((state) => state.userName[0]);
    const passwordR = useSelector((state) => state.password[0]);

    React.useEffect(() => {
        setUserName(userNameR)
        setPassword(passwordR)
        console.log("userNameR",userNameR , "passwordR",passwordR)
        if (userNameR !== []) {
            console.log("object");
        }
    }, [])
    const saveLogin = async (value) => {
        console.log('setData...');
        try {
            await AsyncStorage.setItem("userName", (value.userName))
            await AsyncStorage.setItem("Password", (value.password))
            console.log(value.userName);
            const userName = await AsyncStorage.getItem("userName")
            const Password = await AsyncStorage.getItem("Password")
            console.log("userInfo is >>> ", userName, Password);
        } catch (e) {
            console.log("error >>>>", e)
        }
    }

    const Move = (value) => {
        if (rememberMe == true) {
            saveLogin(value)
        }
        props.navigation.navigate("Home")
    }



    return (
        <View style={[styles.body, { justifyContent: "flex-start", }]}>
            <StatusBar backgroundColor="#FFA500" />

            <Image
                style={[styles.datexLogo, { marginTop: 20, }]}
                source={require('../assets/photos/fa_background-header.png')} />

            <ScrollView style={[styles.scrollView]}>
                <Text style={[styles.globalTxt, { marginTop: 10, textAlign: "center", marginBottom: 40 }]}>
                    صفحه ورود
                            </Text>
                <TextInput
                    direction='rtl'
                    label="نام کاربری"
                    mode='outlined'
                    style={[styles.textInput], { textAlign: 'right', marginTop: 20, width: "100%", alignSelf: "center", fontSize: 24 }}
                    value={userName}
                    onChangeText={text => setUserName(text)}
                    theme={{ colors: { accent: "#ffffff", primary: "#FFA500", placeholder: "#FFA500" } }}
                />
                <TextInput
                    direction='rtl'
                    label="رمز عبور"
                    mode='outlined'
                    style={[styles.textInput], { textAlign: 'right', marginTop: 15, width: "100%", alignSelf: "center", elevation: 5, fontSize: 24 }}
                    value={password}
                    onChangeText={text => setPassword(text)}
                    theme={{ colors: { accent: "#ffffff", primary: "#FFA500", placeholder: "#FFA500" } }}
                />
                <View style={styles.checkBox}>
                    <Checkbox
                        color='#FFA500'
                        status={rememberMe ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setChecked(!rememberMe)
                            console.log(rememberMe)
                        }}
                    />

                    <Text>
                        مرا بخاطر بسپار
                         </Text>
                </View>
                <Button
                    mode="contained"
                    style={styles.globalBtn}
                    theme={{ colors: { accent: "#ffffff", primary: "#FFA500", placeholder: "#FFA500" } }}
                    onPress={() => Move({ userName, password })}
                >
                    <Text style={{ fontSize: 24 }}>
                        ورود
                        </Text>
                </Button>
            </ScrollView>

        </View>

    );
}

export default Login;