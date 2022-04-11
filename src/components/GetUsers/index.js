import React, { useContext } from 'react';

import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Alert
} from 'react-native';


import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import UsersContext from '../../Context/UsersContext';



function GetUsers({ data }) {

    const { dispatch } = useContext(UsersContext)


    const navigation = useNavigation();

    function handleUserForm() {
        navigation.navigate("UserForm", data)
        console.log(data)
    }

    function handleUserEdit() {
        navigation.navigate("UserForm", data)
        //console.log('edit', data.id)
    }

    function handleUserDelete() {
        //navigation.navigate("UserForm", data.id)
        //console.log('delete', data.id)

        Alert.alert(
            "Atenção!",
            "Você tem certeza que deseja deletar esse ?",
            [
                {
                    text: "Cancel",
                    onPress: () => { },
                    style: "cancel"

                },
                {
                    text: "OK",
                    onPress: () => {
                        dispatch({
                            type: 'deleteUser',
                            payload: data,

                        })
                    },
                }
            ]
        )
    }


    return (
        <View style={styles.container}>

            <TouchableOpacity
                onPress={handleUserForm}
                style={styles.containerUser}>
                <Image
                    style={styles.avatar}
                    source={{ uri: data.avatarUrl }}
                />
                <View style={styles.dadosUser}>
                    <Text style={styles.name}>{data.name}</Text>
                    <Text style={styles.email}>{data.email}</Text>
                </View>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.buttonAction}
                        onPress={handleUserEdit}

                    >
                        <Icon name="edit" size={30} color={"#04d361"} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={handleUserDelete}
                    >
                        <Icon name="delete" size={30} color={"red"} />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>

        </View>
    )
}

export default GetUsers;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },

    containerUser: {
        flexDirection: 'row',
        padding: 5,
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30
    },
    dadosUser: {
        justifyContent: 'space-around',
        paddingLeft: 15
    },
    name: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 18
    },

    email: {
        fontWeight: 'bold',
        color: 'gray',
        fontSize: 14
    },
    actions: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    buttonAction: {
        marginRight: 25,
    }
})


