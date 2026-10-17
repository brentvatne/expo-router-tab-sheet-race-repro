import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function PSheet() {
  const { d } = useLocalSearchParams<{ d?: string }>();
  return (
    <View style={{ flex: 1, padding: 24 }}>
      <Text style={{ fontSize: 24 }}>P sheet</Text>
      <Text>d = {d ?? '(none)'}</Text>
    </View>
  );
}
