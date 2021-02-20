import React, { useEffect } from 'react'
import { View, Text, StatusBar, Image } from "react-native";
import { styles } from '../styles/GlobalStyle';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';

// import {
//     LazyloadScrollView,
//     LazyloadView,
//     LazyloadImage
// } from 'react-native-lazyload';


const Home = () => {
    // const bourse = useSelector((state) => state.bourseData[0]);
    const [Data, setData] = React.useState([])
    const dispatch = useDispatch();
    const [show, setShow] = React.useState(false)

    useEffect(() => {
        var config = {
            method: 'get',
            url: 'https://data.nadpco.com/v1/BaseInfo/Companies',
        };
        axios(config)
            .then(function (response) {
                let items = response.data;
                setData(items)
                setShow(true)
                // console.log(JSON.stringify(response.data))
            })
            .catch(function (error) {
                console.log(error);
            });

        try {
            dispatch(bourseData(Data));
            setShow(true)

        } catch (e) {
            console.log(e)
        }
    }, [])


    useEffect(() => {
        console.log("Show >>> ", show);
    }, [Data])
    return (
        <ScrollView>
            <View
                style={styles.body}
            >

                <StatusBar backgroundColor="#FFA500" />
                {show ? (
                    <View>

                        {Data.map((item, CoID) => (
                            <View style={styles.cards} key={CoID}>
                                <Text>Show</Text>
                                <View style={styles.textLine} >
                                    <Text style={styles.cardTitle}>نام</Text>
                                    <Text style={styles.cardText}>{item.CoName}</Text>
                                </View>
                                <View style={styles.textLine} >
                                    <Text style={styles.cardTitle}>نماد</Text>
                                    <Text style={styles.cardText}>{item.CoTSESymbol}</Text>
                                </View>
                                <View style={styles.textLine} >
                                    <Text style={styles.cardTitle}>نام بازار</Text>
                                    <Text style={styles.cardText}>{item.MarketName}</Text>
                                </View>
                            </View>
                        ))}
                    </View>

                ) :
                    <Text style={styles.globalTxt}>
                        درحال لود اطلاعات ...
            </Text>
                }
            </View>
        </ScrollView>

    );
}

export default Home;


// import React, { useEffect } from 'react'
// import { View, Text, StatusBar, Image } from "react-native";

// const Home = () => {
//     return (
//         <View >
//             <Text>
//                 Home
//             </Text>
//         </View>    )
// }
// export default Home;