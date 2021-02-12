import React from 'react'
import { View, Text, StatusBar, Image } from "react-native";
import { styles } from '../styles/GlobalStyle';
import {useSelector} from 'react-redux'

const Home = () => {
    const bourse = useSelector((state) => state.bourseData[0]);


    useEffect(() =>{
        console.log(bourse)
    },[])
    return (
        <View style={styles.body}>
            <StatusBar backgroundColor="#FFA500" />

        </View>

    );
}

export default Home;