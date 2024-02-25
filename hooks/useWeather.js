import {useState, useEffect} from 'react';
import * as Location from 'expo-location';
import axios from 'axios';

const useWeather = () => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [week, setWeek] = useState([]);

    const API_KEY = 'a5774cd5be7c92b7ebeee82b50b35c91';

    useEffect(() => {
        (async () => {
          
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
          let location = await Location.getCurrentPositionAsync({});
          setLocation(location.coords);
        })();
      }, []);

    useEffect(()=> {
    if (location){
        listWeather(location.latitude, location.longitude);
        listWeatherWeek(location.latitude, location.longitude);
    }
    }, [location]);

    const listWeather = async (latitude, longitude) => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=fr&appid=${API_KEY}`);
        if(response.data){
        setWeather(response.data);
        setLoading(false);
        }
    }
    catch (error) {
        console.error('Error no data:', error);
    }
    };
    const listWeatherWeek = async (latitude, longitude) => {
    try {
        const responseWeek = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);
        if(responseWeek.data && responseWeek.data.list){
        const day = {};
        responseWeek.data.list.forEach( item =>{
            const date = item.dt_txt.split(' ')[0];
            if(!day[date]){
            day[date] = item;
            }
        });
        const filterWeek = Object.values(day);
        setWeek(filterWeek);
        setLoading(false);
        }
    }
    catch (error) {
        console.error('Error no data:', error);
    }
    };


    return {loading, weather, week};


};
export default useWeather;