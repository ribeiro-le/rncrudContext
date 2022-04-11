import React, { useContext } from 'react';

import users from '../data/users'

import GetUsers from '../components/GetUsers'

import {
    View,
    Text,
    FlatList,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons'

import { useNavigation } from '@react-navigation/native';
import UsersContext from '../Context/UsersContext';


function UserList() {

    const { state } = useContext(UsersContext)


    const navigation = useNavigation();

    function handleForm() {
        navigation.navigate("UserForm")
        // console.log('click test')
    }


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerUserList}>

                <Text style={styles.title}>Lista de Usuários</Text>

                <TouchableOpacity style={styles.buttonAdd} onPress={handleForm}>
                    <Icon name="add" size={30} color="#6833e4" />
                </TouchableOpacity>

            </View>

            <FlatList
                data={state.users}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <GetUsers data={item} />}
            />

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#202024'
    },

    headerUserList: {
        backgroundColor: '#121214',
        height: 65,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: 15
    },
    buttonAdd: {
        marginRight: 15,
    }

})

export default UserList