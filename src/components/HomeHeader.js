import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../styles/GlobalStyle';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function HomeHeader() {

  return (
    <View style={globalStyles.flexRow}>
      <Text style={[globalStyles.textWhiteBold24, {flex: 1}]}>Good evening</Text>
      <View style={[globalStyles.flexRow, {marginRight: 10}]}>
        <Ionicons name='notifications' size={24} color='white' style={globalStyles.padding8}/>
        <Ionicons name='timer-outline' size={24} color='white' style={globalStyles.padding8}/>
        <Ionicons name='settings-outline' size={24} color='white' style={globalStyles.padding8}/>
      </View>
    </View>
  )
}
