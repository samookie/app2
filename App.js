import { StatusBar } from 'expo-status-bar';
import {StyleSheet} from 'react-native';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import useWeather from './hooks/useWeather';
import Loader from './components/Loader';
import Header from './components/Header';
import Today from './components/Today';
import Week from './components/Week';
export default function App() {
  const {loading, weather, week} = useWeather();
  return (
    <ApplicationProvider style={styles.container} {...eva} theme={eva.light}>
      <StatusBar style="auto" />
      {loading ? (
        <Loader/>
      ):(
        <>
        <Header weather={weather}/>
        {!loading && weather && weather.weather &&(
        <Today weather={weather}/>
        )}
        <Week week={week} loading={loading} />
        </>
      )}
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height:'100%',
    width:'100%',
    color:'white',
  },
});
