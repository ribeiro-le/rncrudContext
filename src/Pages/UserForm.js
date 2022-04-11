import React, { useContext, useState } from 'react';

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
import UsersContext from '../Context/UsersContext';



function UserForm(users) {

    const [user, setUser] = useState(users.route.params ? users.route.params : {});
    const { dispatch } = useContext(UsersContext)

    //console.log(user)

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

                <Text style={styles.titleForm}>Nome</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={name => setUser({ ...user, name })}
                    placeholder="Informe seu nome"
                    placeholderTextColor={"#737380"}
                    value={user.name}
                >
                </TextInput>

                <Text style={styles.titleForm}>E-mail</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={email => setUser({ ...user, email })}
                    placeholder="Informe seu email"
                    placeholderTextColor={"#737380"}
                    value={user.email}
                >
                </TextInput>

                <Text style={styles.titleForm}>URL do Avatar</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={avatar => setUser({ ...user, avatar })}
                    placeholder="Informe o  URL do Avatar"
                    placeholderTextColor={"#737380"}
                    value={user.avatarUrl}
                >
                </TextInput>

                <TouchableOpacity style={styles.saveButton}
                    onPress={() => {
                        dispatch({
                            type: user.id ? 'updateUser' : 'createUser',
                            payload: user,
                        })
                        navigation.goBack();
                    }}
                >
                    <Text style={styles.textSave}>SALVAR</Text>
                </TouchableOpacity>
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
        margin: 10,

    },
    titleForm: {
        color: '#fff',
        fontWeight: 'bold',
        margin: 10,
        fontSize: 16

    },
    input: {
        backgroundColor: '#121214',
        height: 50,
        borderRadius: 7,
        color: '#fff',
        fontSize: 15,
        padding: 10,
        fontWeight: 'bold',
    },

    saveButton: {
        height: 50,
        backgroundColor: '#04d361',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        borderRadius: 8
    },
    textSave: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 20,
    }

})