import React from "react";
import { View, ActivityIndicator,StyleSheet } from "react-native";

const Loader = ({ loading }) => {
    return (
        loading && (
            <View style = {styles.loadingContainer}>
                <ActivityIndicator size="large" color="#111A23" />
            </View>
        )
    );
};
const styles = StyleSheet.create({
    loadingContainer:{
        flex:1,
        backgroundColor:'rgba(255,255,255,0.5',
        alignItems:'center',
        position:'absolute',
        justifyContent:'center',
        width:'100%',
        height:'100%',
      },
});

export default Loader;