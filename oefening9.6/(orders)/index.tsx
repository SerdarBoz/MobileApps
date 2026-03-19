import { router } from 'expo-router';
import { Button, Text, View } from "react-native";

export default function HomeScreen() {

    return (
        <View>
            <Text>ORDER OVERVIEW SCREEN</Text>
            <Button title='To detail'  onPress={() =>  router.navigate('(detail)')} />

        </View>
    );
}

