import React, { useState } from 'react';

import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { useNavigation } from '@react-navigation/native';



function UserForm(users, data) {

    const [user, setUser] = useState(users.route.params ? users.route.params : {});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    console.log(user)

    const navigation = useNavigation();





    function handleNavigateUser() {
        navigation.navigate("UserList")
        // console.log('click test')
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerForm}>
                <TouchableOpacity onPress={handleNavigateUser}>
                    <Icon name="arrow-back" size={25} color={'#fff'} />
                </TouchableOpacity>
                <Text style={styles.title}>Formulário de Usuários</Text>
            </View>

            <View style={styles.formContainer}>
                <Text>Nome</Text>
                <TextInput
                    onChangeText={name => setUser({ ...user, name })}
                    placeholder="Informe seu nome"
                    value={user.name}
                >
                </TextInput>

                <Text>Email</Text>
                <TextInput
                    onChangeText={email => setUser({ ...user, email })}
                    placeholder="Informe seu email"
                    value={user.email}
                >
                </TextInput>
                <Text>Url Avatar</Text>
                <TextInput
                    onChangeText={avatar => setUser({ ...user, avatar })}
                    placeholder="Informe Url do avatar"
                    value={user.avatarUrl}
                >
                </TextInput>
            </View>

        </SafeAreaView>
    )
}

export default UserForm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#202024'
    },

    headerForm: {
        backgroundColor: '#121214',
        height: 65,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: 15
    },

    formContainer: {
        margin: 10
    }
})