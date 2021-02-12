import React from 'react'
import { Image, View, Text, ImageBackground, StatusBar, KeyboardAvoidingView, ScrollView } from "react-native";
import { styles } from '../styles/GlobalStyle';
import { I18nManager } from 'react-native';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

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

const Login = () => {
    const [checked, setChecked] = React.useState(true)
    const [userName, setUserName] = React.useState('')
    const [password, setPassword] = React.useState('')
    return (
        <View style={[styles.body, { justifyContent: "flex-start", }]}>
            <StatusBar backgroundColor="#FFA500" />

            <Image
                style={[styles.datexLogo, { marginTop: 20, }]}
                source={require('../assets/photos/fa_background-header.png')} />

            <View style={[styles.main, { marginBottom: 0 }]}>
                <View style={{ borderRadius: 20, elevation: 23, backgroundColor: "#fff", padding: 30, paddingVertical: 60, paddingBottom: 1000 }}>


                    <Text style={[styles.globalTxt, { marginTop: 0, textAlign: "center", marginBottom: 40 }]}>
                        صفحه ورود
                            </Text>
                    <View style={[styles.LoginForm]}>

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


                    </View>
                    {/* </KeyboardAvoidingView> */}
                    <View style={styles.checkBox}>
                        <Checkbox
                            color='#FFA500'
                            status={checked ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setChecked(!checked)
                                console.log(checked)
                            }}
                        />

                        <Text>
                            مرا بخاطر بسپار
                         </Text>
                    </View>

                    <Button
                        mode="contained"
                        style={{ height: 60, justifyContent: "center", alignContent: "center", fontSize: 24, marginTop: 70 }}
                        theme={{ colors: { accent: "#ffffff", primary: "#FFA500", placeholder: "#FFA500" } }}
                        onPress={() => console.log('Pressed')}
                    >
                        <Text style={{ fontSize: 24 }}>
                            ورود
                        </Text>
                    </Button>
                </View>
            </View>

        </View>

    );
}

export default Login;