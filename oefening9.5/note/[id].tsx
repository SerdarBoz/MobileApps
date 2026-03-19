import { View, Text } from 'react-native';
import { useLocalSearchParams, Redirect } from 'expo-router';
import { useSession } from '@/ctx';

export default function NoteDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { isAuthenticated } = useSession();

  if (!isAuthenticated) {
    return <Redirect href="/" />;
  }

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Viewing Note {id}</Text>
      <Text style={{ marginTop: 10 }}>
        This is the content for note {id}.
      </Text>
    </View>
  );
}
