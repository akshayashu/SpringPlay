import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { globalStyles } from '../styles/GlobalStyle';
import Ionicons from '@expo/vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import LibraryScreen from './LibraryScreen';
import { LinearGradient } from 'expo-linear-gradient'

export default function BaseScreen({ navigation }) {

  // 0 is home
  // 1 is search
  // 2 is library
  
  const [tab, setTab] = useState(0);

  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={{ flex: 1 }}>
        {tab == 0 ?
          <HomeScreen navigation={navigation}/> :
          tab == 1 ?
            <SearchScreen /> : <LibraryScreen />
        }
        {/* <HomeScreen /> */}
      </View>

      <View style={[globalStyles.tabContainer]}>

        <LinearGradient
          colors={['rgba(18,18,18,0.25)','rgba(54,69,79,0.5)']}
          style={globalStyles.gradientBackground}
        />

        {/* home icon */}
        <TouchableOpacity
          style={globalStyles.containerCenter}
          onPress={() => setTab(0)}
        >
          <Ionicons
            name={tab == 0 ? 'home' : 'home-outline'}
            size={20}
            color='white'
          />
          <Text style={[tab == 0 ? globalStyles.textWhiteBold16 : globalStyles.textWhite16, { fontSize: 12, margin: 0 }]}>Home</Text>
        </TouchableOpacity>

        {/* search icon */}
        <TouchableOpacity
          style={globalStyles.containerCenter}
          onPress={() => setTab(1)}
        >
          <Ionicons
            name={tab == 1 ? 'search' : 'search-outline'}
            size={20}
            color='white'
          />
          <Text style={[tab == 1 ? globalStyles.textWhiteBold16 : globalStyles.textWhite16, { fontSize: 12, margin: 0 }]}>Search</Text>
        </TouchableOpacity>

        {/* library icon */}
        <TouchableOpacity
          style={globalStyles.containerCenter}
          onPress={() => setTab(2)}
        >
          <Ionicons
            name={tab == 2 ? 'file-tray-stacked' : 'file-tray-stacked-outline'}
            size={20}
            color='white'
          />
          <Text style={[tab == 0 ? globalStyles.textWhiteBold16 : globalStyles.textWhite16, { fontSize: 12, margin: 0 }]}>Library</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>

  )
}

const style = StyleSheet.create({

})