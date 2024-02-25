import React from "react";
import {Text, Divider } from "@ui-kitten/components";
import { View , StyleSheet} from 'react-native';


const Header = ({ weather }) => {
    return (
        <>
        <View style={styles.title}>
            <Text category='h1' style={{ color: '#BFB1A0' }}>Weather App</Text>
            {weather && <Text category='h4' style={{ color: '#BFB1A0' }}>{weather.name}</Text>}
        </View><Divider />
        </>
    );
};
const styles = StyleSheet.create({
    title:{
        flex:0.8,
        backgroundColor:'#111A23',
        alignItems: 'center',
        justifyContent: 'center',
        color:"#FFEFE0",
      },
});

export default Header;