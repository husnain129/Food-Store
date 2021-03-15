import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';

const FoodCard = () => {
	return (
		<View style={styles.FoodCard}>
			<View style={styles.cardContainer}>
				<View style={styles.card}>
					<View style={styles.imageContainer}>
						<Image
							source={{
								uri: 'https://i.ibb.co/w704v60/burger-1-removebg-preview.png'
							}}
							style={{ width: 100, height: 100 }}
						/>
					</View>
					<View>
						<Text style={{ ...styles.text, fontSize: 16, fontWeight: 'bold' }}>Cheese Burger</Text>
						<Text style={{ ...styles.text, fontSize: 14 }}>Fresh Party</Text>
					</View>
					<View style={styles.iconContainer}>
						<View style={styles.icon}>
							<Ionicons name="star" size={12} color="orange" style={{ marginRight: 2 }} />
							<Ionicons name="star" size={12} color="orange" style={{ marginRight: 2 }} />
							<Ionicons name="star" size={12} color="orange" style={{ marginRight: 2 }} />
							<Ionicons name="star" size={12} color="orange" style={{ marginRight: 2 }} />
							<Ionicons name="star" size={12} color="orange" style={{ marginRight: 2 }} />
						</View>
						<Text style={{ color: Colors.primary, fontSize: 12 }}>$15.00</Text>
					</View>
				</View>

				{/* ....SECOND CARD .......*/}
				<View style={styles.card}>
					<View style={styles.imageContainer}>
						<Image
							source={{
								uri: 'https://i.ibb.co/vhRXVfY/pasta-removebg-preview.png'
							}}
							style={{ width: 100, height: 100 }}
						/>
					</View>
					<View>
						<Text style={{ ...styles.text, fontSize: 16, fontWeight: 'bold' }}>Cheese Burger</Text>
						<Text style={{ ...styles.text, fontSize: 14 }}>Fresh Party</Text>
					</View>
					<View style={styles.iconContainer}>
						<View style={styles.icon}>
							<Ionicons name="star" size={12} color="orange" style={{ marginRight: 2 }} />
							<Ionicons name="star" size={12} color="orange" style={{ marginRight: 2 }} />
							<Ionicons name="star" size={12} color="orange" style={{ marginRight: 2 }} />
							<Ionicons name="star" size={12} color="orange" style={{ marginRight: 2 }} />
							<Ionicons name="star" size={12} color="orange" style={{ marginRight: 2 }} />
						</View>
						<Text style={{ color: Colors.primary, fontSize: 12 }}>$15.00</Text>
					</View>
				</View>
			</View>
		</View>
	);
};

export default FoodCard;

const styles = StyleSheet.create({
	FoodCard: {
		height: 'auto',
		marginTop: 10
	},
	cardContainer: {
		flexDirection: 'row',
		width: '100%'
	},
	card: {
		paddingHorizontal: 10,
		backgroundColor: Colors.card,
		borderRadius: 20,
		width: '50%',
		marginRight: 5
	},
	imageContainer: {
		width: 100,
		height: 100,
		overflow: 'hidden',
		borderRadius: 10,
		marginRight: 3,
		alignItems: 'center',
		justifyContent: 'center'
	},
	text: {
		paddingBottom: 8,
		color: Colors.primary,
		paddingLeft: 5
	},
	iconContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		textAlign: 'center',
		paddingBottom: 15
	},
	icon: {
		flexDirection: 'row',
		marginLeft: 5
	}
});
