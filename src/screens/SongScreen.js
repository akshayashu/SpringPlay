import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient';

export default function SongScreen() {
  return (
    <SafeAreaView style={{ backgroundColor: '#000', flex: 1 }}>
      <View>
        <Text style={styles.textSignUp}>SongScreen</Text>
      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  textSignUp: {
    fontSize: 20,
    fontWeight: '500',
    color: '#fff',
    padding: 20
  },
});
