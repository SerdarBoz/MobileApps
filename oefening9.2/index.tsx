import { View, Text } from "react-native";
import { Link } from "expo-router";

export default function MainIndex() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Welcome to the App!</Text>

      <Text style={{ fontSize: 16, marginBottom: 10 }}>Tabs:</Text>
      <Link href="/home" style={{ color: "blue", marginBottom: 5 }}>Go to Home</Link>
    

      <Text style={{ fontSize: 16, marginBottom: 10 }}>Drawer:</Text>
      <Link href="/dashboard" style={{ color: "blue", marginBottom: 5 }}>Go to Dashboard</Link>
    
    </View>
  );
}