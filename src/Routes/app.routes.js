import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UserList from '../Pages/UserList';
import UserForm from '../Pages/UserForm';


const AppStack = createNativeStackNavigator();

function AppRoutes() {
    return (
        <AppStack.Navigator initialRouteName="UserList">
            <AppStack.Screen
                name="UserList"
                component={UserList}
                options={{
                    headerShown: false
                }}

            >

            </AppStack.Screen>

            <AppStack.Screen
                name="UserForm"
                component={UserForm}
                options={{
                    headerShown: false,

                }}
            >

            </AppStack.Screen>

        </AppStack.Navigator>
    )
}

export default AppRoutes;