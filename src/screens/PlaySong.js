import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '../styles/GlobalStyle';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function PlaySong({ navigation }) {

  const [songName, setSong] = useState('');
  const [songArtist, setArtist] = useState('');
  const [songURL, setURL] = useState(null);

  if (songName.length == 0 && navigation) {
    setSong(navigation.getParam('name'));
    setArtist(navigation.getParam('artists'));
    setURL(navigation.getParam('url'));
  }
  return (
    <SafeAreaView style={globalStyles.container}>

      <View style={[{ paddingLeft: 20, paddingRight: 20 }]}>

        {navigation ?

          <View>
            <View style={globalStyles.flexRow}>
              <Ionicons
                name='chevron-down'
                size={24}
                color='white'
              />
              <Ionicons
                name='chevron-down'
                size={24}
                color='white'
              />
            </View>

            <Text style={globalStyles.textWhiteBold24}>{songName}</Text>
            <Text style={globalStyles.textWhiteBold24}>{songArtist}</Text>
            <ImageBackground
              source={songURL}
              style={{ height: 100, width: 100 }}
            />
          </View>
          :
          <Text>Loading..</Text>
        }


      </View>
    </SafeAreaView>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 10
  },
});
