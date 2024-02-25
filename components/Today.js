import React from "react";
import {Text} from "@ui-kitten/components";
import { View , StyleSheet, Image} from 'react-native';


const Today = ({ weather }) => {
    return (
        <>
        <View style={styles.today} >
          <Text category='h4' style={{color:'#111A23'}}>The weather today :</Text>
          <Image
            style={styles.icon}
            source={{
              uri:`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`,
            }}
          />
          <Text category='h5' style={{color:'#687077'}}> Temperature : {weather.main.temp} C°</Text>
          <Text category='h5' style={{color:'#687077'}}> Description : {weather.weather[0].description}</Text>
        </View>
        </>
    );
};
const styles = StyleSheet.create({
    today:{
        flex:1.5,
        backgroundColor:'#E3E3DE',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon:{
        width:'40%',
        height:'40%',
    },
});

export default Today;