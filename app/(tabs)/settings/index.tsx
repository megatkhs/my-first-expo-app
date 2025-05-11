import AnimatedStyleUpdateExample from '@/components/AnimatedStyleUpdateExample';
import { Text, View } from 'react-native';

export default function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>設定画面</Text>
      <AnimatedStyleUpdateExample />
    </View>
  );
}
