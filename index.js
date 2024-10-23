import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SurahList from './screens/SurahList';
import SurahDetail from './screens/SurahDetail';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="SurahList" component={SurahList} options={{ title: 'Quran Surahs' }} />
                <Stack.Screen name="SurahDetail" component={SurahDetail} options={{ title: 'Surah Detail' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
