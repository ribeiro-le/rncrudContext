import React from 'react';
import Routes from '../src/Routes';

import { NavigationContainer } from '@react-navigation/native';

import { View, Text } from 'react-native';


function App() {
    return (
        <NavigationContainer>
            <Routes />
        </NavigationContainer>
    )
}

export default App;