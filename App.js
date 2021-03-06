import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './app/screens/Home';
import MusicRec_Text from './app/screens/MusicRec_Text';
import RecognizeMusic from './app/screens/RecognizeMusic';
import MusicPlayer from './app/screens/MusicPlayer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="Home"
        component={Home}
        />
        <Stack.Screen name='MusicPlayer' component={MusicPlayer}/>
        <Stack.Screen name='Recognition' component={RecognizeMusic}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
