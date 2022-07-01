import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Dimensions, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

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
        <LinearGradient
          colors={['rgba(0,0,0,0.00)', 'rgba(0,0,0,1)']}
          style={styles.gradientBackground}
        />
        
        <View style={styles.upperView}>
          <ImageBackground
              source={require('./assets/spotifyLogo.png')}
              style={styles.spotifyIcon}
              resizeMode='cover'
            />
          <Text style={styles.titleText1}>Enjoy Millions of Songs</Text>
          <Text style={styles.titleText2}>On Spotify.</Text>
        </View>
      </ImageBackground>

      <View style={styles.lowerView}>
        {/* signup */}
        <TouchableOpacity style={styles.btnSignUp}>
          <Text style={styles.textSignUp}> Sign up for free </Text>
        </TouchableOpacity>

        {/* google sign in */}
        <TouchableOpacity style={styles.btnLogin}>
          <ImageBackground
            source={require('./assets/googleLogo.png')}
            style={styles.googleIcon}
            resizeMode='cover'
          />
          <Text style={styles.textSignUp}> Continue with google </Text>
        </TouchableOpacity>

        {/* login */}
        <TouchableOpacity style={styles.btnLogin}>
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
    height: Dimensions.get('window').height / 1.5,
  },
  gradientBackground: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
    width: '100%'
  },
  upperView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  spotifyIcon: {
    position: 'absolute',
    bottom: 100,
    height: 50,
    width: 50
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
    color: '#fff',
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
    borderRadius: 25,
    marginTop: 30,
    backgroundColor: '#21c45a',
  },
  btnLogin: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
    width: Dimensions.get('window').width / 1.25,
    borderRadius: 25,
    marginTop: 10,
    borderWidth: 1,
    backgroundColor: '#000',
    borderColor: '#fff'
  },
  textSignUp: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff'
  },
  googleIcon: {
    position: 'absolute',
    left: 16,
    height: 16,
    width: 16
  }
});
