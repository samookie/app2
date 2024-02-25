import React from "react";
import {Text, Card} from "@ui-kitten/components";
import { View , StyleSheet, Image} from 'react-native';


const Week = ({ loading, week }) => {
    return (
        <View style={styles.week} >
          {!loading && week &&(
            <>
            <View style={styles.cardContainer}>
            {week.slice(0,5).map((day, index)=>(
              <Card key={index} style={styles.card}>
                <View style={styles.header}>
                  <Text style={{color:'#111A23'}}>{new Date(day.dt * 1000).toLocaleDateString()}</Text>
                  <Image
                    style={styles.headerIcon}
                    source={{
                      uri:`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`,
                    }}
                  />
                </View>
                <View style={styles.content}>
                  <Text style={{color:'#687077'}}> Temperature : {day.main.temp} C°</Text>
                  <Text style={{color:'#687077'}}> Description : {day.weather[0].description}</Text>
                </View>
              </Card>
            ))}
            </View>
            </>
          )}
        </View> 
    );
};
const styles = StyleSheet.create({
    week:{
        flex:3,
    },
    cardContainer:{
    flex:1,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
    backgroundColor:'#E3E3DE',
    },
    card:{
    backgroundColor:'#F3F3F1',
    borderRadius:5,
    elevation:3,
    borderColor:'#E3E3DE',
    borderWidth:1,
    flexWrap:'nowrap',
    height:'20%',
    width:'100%',
    },
    header:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    height:'40%',
    borderBottomColor:'#111A23',
    borderBottomWidth:0.5,
    backgroundColor:'darkGrey',
    },
    headerIcon:{
    width:50,
    height:50,
    },
    content:{
    justifyContent:'center',
    alignItems:'center',
    },

});

export default Week;