import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';

const { width } = Dimensions.get('window');
const FoodItems = () => {
	// https://i.ibb.co/c1pq9Md/sweet-removebg-preview.png
	return (
		<View style={styles.foodContainer}>
			<View style={styles.foodList}>
				<View style={{ ...styles.food, backgroundColor: Colors.secondary }}>
					<View style={styles.imageContainer}>
						<Image
							source={{
								uri: 'https://i.ibb.co/w704v60/burger-1-removebg-preview.png'
							}}
							style={{ width: 50, height: 50 }}
						/>
					</View>
					<Text style={{ ...styles.text, color: '#ffffff' }}>Fast Food</Text>
				</View>
				<View style={{ ...styles.food, backgroundColor: Colors.ternary }}>
					<View style={styles.imageContainer}>
						<Image
							source={{
								uri: 'https://i.ibb.co/c1pq9Md/sweet-removebg-preview.png'
							}}
							style={{ width: 40, height: 40 }}
						/>
					</View>
					<Text style={{ ...styles.text, color: 'black' }}>Healthy Food</Text>
				</View>
			</View>
		</View>
	);
};

export default FoodItems;

const styles = StyleSheet.create({
	foodContainer: {
		width: width,
		height: 'auto',
		marginTop: 20
	},
	foodList: {
		marginHorizontal: '10%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		height: 70
	},
	food: {
		flexDirection: 'row',
		width: 'auto',
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 10,

		marginRight: 5
	},
	text: {
		fontWeight: 'bold',
		paddingRight: 10
	},
	imageContainer: {
		width: 50,
		height: 50,
		overflow: 'hidden',
		borderRadius: 10,
		marginRight: 3,
		alignItems: 'center',
		justifyContent: 'center'
	}
});
