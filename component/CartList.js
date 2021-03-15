import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';
import Colors from '../constants/Colors';

const CartList = () => {
	const [item, setItem] = useState(2);
	return (
		<View style={styles.container}>
			<View style={styles.listContainer}>
				<View style={styles.list}>
					<View style={styles.imageContainer}>
						<Image
							source={{
								uri: 'https://i.ibb.co/w704v60/burger-1-removebg-preview.png'
							}}
							style={{ width: 100, height: 100 }}
						/>
					</View>
					<View style={styles.listText}>
						<Text style={{ fontSize: 16 }}>Cheese burger</Text>
						<Text style={{ fontSize: 20, fontWeight: 'bold', color: Colors.text }}>$13.00</Text>
					</View>
				</View>
				<View style={styles.button}>
					<TouchableNativeFeedback onPress={() => setItem(item - 1)}>
						<View style={styles.btn}>
							<Text style={styles.btnText}>-</Text>
						</View>
					</TouchableNativeFeedback>
					<View style={styles.txt}>
						<Text style={{ paddingHorizontal: 5, fontSize: 16 }}>{item}</Text>
					</View>
					<TouchableNativeFeedback onPress={() => setItem(item + 1)}>
						<View style={styles.btn}>
							<Text style={styles.btnText}>+</Text>
						</View>
					</TouchableNativeFeedback>
				</View>
			</View>

			{/* ........2ND LIST............. */}
			<View style={styles.listContainer}>
				<View style={styles.list}>
					<View style={styles.imageContainer}>
						<Image
							source={{
								uri: 'https://i.ibb.co/c1pq9Md/sweet-removebg-preview.png'
							}}
							style={{ width: 100, height: 100 }}
						/>
					</View>
					<View style={styles.listText}>
						<Text style={{ fontSize: 16 }}>Crunchy pasta</Text>
						<Text style={{ fontSize: 20, fontWeight: 'bold', color: Colors.text }}>$17.00</Text>
					</View>
				</View>
				<View style={styles.button}>
					<TouchableNativeFeedback onPress={() => setItem(item - 1)}>
						<View style={styles.btn}>
							<Text style={styles.btnText}>-</Text>
						</View>
					</TouchableNativeFeedback>
					<View style={styles.txt}>
						<Text style={{ paddingHorizontal: 5, fontSize: 16 }}>{item}</Text>
					</View>
					<TouchableNativeFeedback onPress={() => setItem(item + 1)}>
						<View style={styles.btn}>
							<Text style={styles.btnText}>+</Text>
						</View>
					</TouchableNativeFeedback>
				</View>
			</View>
		</View>
	);
};

export default CartList;

const styles = StyleSheet.create({
	container: {
		width: '100%',
		paddingHorizontal: 20
	},

	listContainer: {
		flexDirection: 'row',
		marginTop: 5,
		width: '100%',
		height: 130,
		backgroundColor: Colors.primary,
		borderRadius: 10,
		justifyContent: 'space-between',
		padding: 15
	},
	list: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	imageContainer: {
		width: 100,
		height: 100,
		overflow: 'hidden',
		borderRadius: 20,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: Colors.card
	},
	listText: {
		marginLeft: 15
	},
	button: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 90
	},
	btn: {
		width: 30,
		height: 30,
		backgroundColor: Colors.secondary,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5
	},
	btnText: {
		color: Colors.primary,
		fontSize: 22
	}
});
