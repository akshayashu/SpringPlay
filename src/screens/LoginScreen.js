import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '../styles/GlobalStyle';

export default function LoginScreen({ navigation }) {

  const [text, setText] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(true);

  const passwordHandler = () => {
    setPasswordVisible(!passwordVisible)
  }

  const GoToHomeScreen = () => {
    navigation.navigate('HomeScreen');
  }

  const GoToSongScreen = () => {
    navigation.navigate('SongScreen');
  }

  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={globalStyles.container20}>

        <Ionicons
          style={globalStyles.padding5}
          name='arrow-back'
          size={24}
          color='white'
        />
        {/* email area */}
        <Text style={[globalStyles.textWhiteBold30, { marginTop: 20 }]}>Email or username</Text>
        <TextInput
          placeholder='Username'
          style={globalStyles.textInput20}
        />

        {/* password area */}
        <Text style={[globalStyles.textWhiteBold30, { marginTop: 20 }]}>Password</Text>
        <View style={[globalStyles.textInput20, globalStyles.flexRow]}>
          <TextInput
            placeholder='Password'
            style={[globalStyles.textInput20, { flex: 1, padding: 0, margin: 0 }]}
            secureTextEntry={passwordVisible}
          />
          <Ionicons name={passwordVisible ? 'eye' : 'eye-off'} size={20} color="white" onPress={passwordHandler} />
        </View>

        <TouchableOpacity
          style={[globalStyles.btnGrey, { flex: 0, alignSelf: 'center' }]}
          onPress={GoToHomeScreen}
        >
          <Text style={globalStyles.textBlack20}>Log in</Text>
        </TouchableOpacity>

        <Text style={[globalStyles.textWhite16, { alignSelf: 'center', padding: 20 }]}>Forgot password?</Text>

      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({

});
