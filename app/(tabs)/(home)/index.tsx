import { Link } from 'expo-router';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>ホーム画面</Text>
      <Link
        href={{
          pathname: '/details/[id]',
          params: { id: 'bacon' },
        }}
      >
        View user details
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});
