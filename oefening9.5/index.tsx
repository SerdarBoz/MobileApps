import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { useSession } from '@/ctx';

export default function Home() {
  const { isAuthenticated, login, logout } = useSession();

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>My Notes</Text>

      <Link href="/doesnotexist" asChild>
        <TouchableOpacity style={{ marginBottom: 10 }}>
          <Text style={{ fontSize: 18 }}>Not found test</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/note/1" asChild>
        <TouchableOpacity style={{ marginBottom: 10 }}>
          <Text style={{ fontSize: 18 }}>Note 1</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/note/2" asChild>
        <TouchableOpacity>
          <Text style={{ fontSize: 18 }}>Note 2</Text>
        </TouchableOpacity>
      </Link>

      <Pressable onPress={login} style={{ marginTop: 20 }}>
        <Text>Login</Text>
      </Pressable>

      <Pressable onPress={logout} style={{ marginTop: 10 }}>
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
}
