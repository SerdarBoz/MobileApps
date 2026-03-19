import { View, Text, Button } from "react-native";
import { Link } from "expo-router";

export default function Feed() {
    return (
        <View>
            <Text>This is the feed page</Text>
        
            <Link href="/feed/favorites">
                <Text style={{ color: "blue" }}>Go to Favorites</Text>
            </Link>
        </View>
    );
}