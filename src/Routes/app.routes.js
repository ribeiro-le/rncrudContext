import React from 'react';

import { TouchableOpacity } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Icon from 'react-native-vector-icons/MaterialIcons'

import UserList from '../Pages/UserList';
import UserForm from '../Pages/UserForm';


const AppStack = createNativeStackNavigator();




const screenOptions = {
    headerStyle: {
        backgroundColor: '#f4511e'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold'
    }
}

function AppRoutes() {
    return (
        <AppStack.Navigator initialRouteName="UserList"
            screenOptions={screenOptions}
        >
            <AppStack.Screen
                name="UserList"
                component={UserList}
                options={({ navigation }) => {
                    return {
                        title: 'Lista de Usários',
                        headerRight: () => (
                            <TouchableOpacity onPress={() => navigation.navigate("UserForm")}>
                                <Icon name="add" size={30} color={'#fff'} />
                            </TouchableOpacity>

                        )
                    }
                }}
            >

            </AppStack.Screen>

            <AppStack.Screen
                name="UserForm"
                component={UserForm}
                options={{
                    title: "Formulário de Usuários"
                }}
            >

            </AppStack.Screen>

        </AppStack.Navigator>
    )
}

export default AppRoutes;