import { StyleSheet, View } from 'react-native';
import OtpScreen from './otp/OtpScreen';

export default function App() {
  return (
    <View style={styles.container}>
     <OtpScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
