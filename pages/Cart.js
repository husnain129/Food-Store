import React, { useLayoutEffect } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import CartList from '../component/CartList';
import PriceList from '../component/PriceList';
import Colors from '../constants/Colors';

const { width, height } = Dimensions.get('window');

const Cart = ({ setBarStyle }) => {
	useLayoutEffect(() => {
		setBarStyle('default');
	});
	return (
		<View style={styles.container}>
			<View style={styles.title}>
				<Text style={styles.title}>My</Text>
				<Text style={styles.title}>Cart List</Text>
			</View>
			<CartList />
			<PriceList />
		</View>
	);
};

export default Cart;

const styles = StyleSheet.create({
	container: {
		width: width,
		height: height,
		paddingTop: 40,
		backgroundColor: Colors.ternary
	},
	title: {
		marginBottom: 10,
		paddingHorizontal: 20
	},
	title: {
		paddingHorizontal: 20,
		fontWeight: 'bold',
		fontSize: 20
	}
});
