import { useNavigation } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function HomeScreen() {

    const navigation = useNavigation<any>();

    let user: string = '';
    let password: string = '';

    const save = () => {
        navigation.navigate("login");
    };

    return (
        <View>
            <Text>CREATE USER</Text>
            <Button title='Save' onPress={save} />
            <Button title='Cancel' onPress={save} />

        </View>
    );
}