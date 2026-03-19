import { useNavigation } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function HomeScreen() {

    const navigation = useNavigation<any>();
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');


    const onLogin = () => {
        navigation.navigate('(orders)');
    };

    const onCreateUser = () => {
        navigation.navigate('create-user');
    };

    return (
        <View>
            <Text>User:</Text><TextInput style={styles.input} value={user} onChangeText={setUser} />
            <Text>Password:</Text><TextInput style={styles.input} value={password} onChangeText={setPassword} />
            <Button title='Login' onPress={onLogin} />
            <Button title='Create user' onPress={onCreateUser} />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: 'white', // 👈 makes the field white
        color: 'black', // 👈 text color inside
        padding: 10,
        borderRadius: 5,
        marginBottom: 15,
    }
});