import { StyleSheet, Text, View, ScrollView, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { globalStyles } from '../styles/GlobalStyle';

export default function AuthenticationScreen({ navigation }) {

  const GoToHomeScreen = () => {
    navigation.navigate('HomeScreen');
  }

  const GoToLoginScreen = () => {
    navigation.navigate('LoginScreen');
  }

  const GoToSongScreen = () => {
    navigation.navigate('SongScreen');
  }

  return (
    <SafeAreaView style={globalStyles.container}>

      <ScrollView
        style={globalStyles.container}
        showsVerticalScrollIndicator={false}>

        <ImageBackground
          source={require('../../assets/avici.jpg')}
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
              source={require('../../assets/spotifyLogo.png')}
              style={styles.spotifyIcon}
              resizeMode='cover'
            />
            <Text style={styles.titleText1}>Millions of Songs</Text>
            <Text style={styles.titleText2}>Free On Spotify.</Text>
          </View>
        </ImageBackground>

        <View style={styles.lowerView}>
          {/* signup */}
          <TouchableOpacity
            style={globalStyles.btnGreen}
            onPress={GoToHomeScreen}
          >
            <Text style={globalStyles.textBlackBold16}> Sign up for free </Text>
          </TouchableOpacity>

          {/* google sign in */}
          <TouchableOpacity
            style={globalStyles.btnBorderWhite}
            onPress={GoToSongScreen}
          >
            <ImageBackground
              source={require('../../assets/googleLogo.png')}
              style={styles.googleIcon}
              resizeMode='cover'
            />
            <Text style={globalStyles.textWhiteBold16}> Continue with google </Text>
          </TouchableOpacity>

          {/* login */}
          <TouchableOpacity 
            style={globalStyles.btnBorderWhite}
            onPress={GoToLoginScreen}
          >
            <Text style={globalStyles.textWhiteBold16}> Log in </Text>
          </TouchableOpacity>


        </View>

      </ScrollView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
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
  googleIcon: {
    position: 'absolute',
    left: 16,
    height: 16,
    width: 16
  }
});
