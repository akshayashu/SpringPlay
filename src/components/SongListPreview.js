import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';

export default function SongListPreview({ item, pressHandler }) {

	return (
		<TouchableOpacity onPress={() => pressHandler(item.id)}>
			<Text style={styles.listText}>{item.name}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	listText: {
		color: '#fff',
		fontSize: 16,
		padding: 20,
		marginHorizontal: 20,
		marginTop: 20,
		backgroundColor: '#21c45a'
	}
});