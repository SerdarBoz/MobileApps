import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function Favorites() {
  return (
    <View>
      <Text>Favorites Page</Text>

          <Link href="/doesnotexist" style={{
              color: '#1e90ff',
              textDecorationLine: 'underline',
              fontWeight: '600',
            }}>
              <Text style={{ fontSize: 18 }}>Not found test</Text>
            </Link>
    </View>
  );
}