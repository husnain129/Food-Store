import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
// import Home from './pages/Home';
// import Details from './pages/Details';
import Cart from './pages/Cart';

export default function App() {
	const [barStyle, setBarStyle] = useState('default');
	return (
		<View style={styles.container}>
			{/* <Details setBarStyle={setBarStyle} /> */}
			{/* <Home setBarStyle={setBarStyle} /> */}
			<Cart setBarStyle={setBarStyle} />
			<StatusBar style={barStyle} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
