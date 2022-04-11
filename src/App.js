import React from 'react';
import Routes from '../src/Routes';

import { NavigationContainer } from '@react-navigation/native';
import { UsersProvider } from './Context/UsersContext';


function App() {
    return (
        <UsersProvider>
            <NavigationContainer>
                <Routes />
            </NavigationContainer>
        </UsersProvider>
    )
}

export default App;