import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function App() {
  return (
    <ScrollView
      style={styles.scrollContainer}
      showsVerticalScrollIndicator={false}>
      <ImageBackground
        source={require('./assets/avici.jpg')}
        style={styles.backImage}
        blurRadius={1}
        resizeMode='cover'
      >
        
        <View style={styles.upperView}>
          <Text style={styles.titleText1}>Enjoy Millions of Songs</Text>
          <Text style={styles.titleText2}>Spring Play</Text>
        </View>
      </ImageBackground>

      <View style={styles.lowerView}>
        <TouchableOpacity style={styles.btnSignUp}>
          <Text style={styles.textSignUp}> Sign up for free </Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.lowerView}>
        <TouchableOpacity style={styles.btnSignUp}>
          <Text style={styles.textSignUp}> Log in </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#000'
  },
  backImage: {
    height: Dimensions.get('window').height / 1.75,
  },
  upperView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText1: {
    position: 'absolute',
    color: '#fff',
    fontSize: 28,
    fontWeight: '600',
    bottom: 50
  },
  titleText2: {
    position: 'absolute',
    color: '#FF7518',
    fontSize: 28,
    fontWeight: '600',
    bottom: 10
  },
  lowerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnSignUp: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    width: Dimensions.get('window').width / 1.25,
    backgroundColor: '#FF7518',
    borderRadius: 25,
    marginTop: 30
  },
  textSignUp: {
    fontSize: 16,
    color: '#fff'
  }
});
