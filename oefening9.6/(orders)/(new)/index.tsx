import { Pressable, Text, View } from 'react-native';

import { router, useNavigation } from 'expo-router';
import { useLayoutEffect } from 'react';

export default function HomeScreen() {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackVisible: false,
            title: '',
            headerRight: () => (
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Pressable onPress={() => router.back()} style={{ marginRight: 15 }}>
                        <Text>Save</Text>
                    </Pressable>
                    <Pressable onPress={() => router.back()} style={{ marginRight: 15 }}>
                        <Text>Cancel</Text>
                    </Pressable>
                </View>
            ),
        });
    });

    return (
        <View>
            <Text>NEW ORDER SCREEN</Text>
        </View>
    );
}