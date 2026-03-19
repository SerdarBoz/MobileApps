import { View, Text, Button, Pressable } from "react-native";
import { Link, useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function Home() {
  const router = useRouter();
  return (
    <View>
      <Text>Home Screen</Text>

      <Button
        title="Go to Feed"
        onPress={() => router.push("/feed")}
      />

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