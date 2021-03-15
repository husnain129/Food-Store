import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';

const RestaurantList = () => {
	return (
		<View style={styles.container}>
			<View style={styles.listContainer}>
				<View style={{ flexDirection: 'row' }}>
					<View style={styles.imageContainer}>
						<Image
							source={{
								uri: 'https://i.ibb.co/XWwpHrT/bread-3008950-960-720-removebg-preview.png'
							}}
							style={{ width: 50, height: 50 }}
						/>
					</View>
					<View style={styles.titleContainer}>
						<Text style={styles.title}>Burger Queen</Text>
						<View style={styles.iconContainer}>
							<View style={styles.icon}>
								<Ionicons name="star" size={15} color="orange" style={{ marginRight: 2 }} />
								<Ionicons name="star" size={15} color="orange" style={{ marginRight: 2 }} />
								<Ionicons name="star" size={15} color="orange" style={{ marginRight: 2 }} />
								<Ionicons name="star" size={15} color="orange" style={{ marginRight: 2 }} />
								<Ionicons name="star" size={15} color="orange" style={{ marginRight: 2 }} />
							</View>
						</View>
						<Text style={{ color: '#AEAEAE', fontSize: 14 }}>2,2 km</Text>
					</View>
				</View>
				<View>
					<Text style={{ color: Colors.card, fontWeight: 'bold', fontSize: 18, marginRight: 10 }}>
						$12.00
					</Text>
				</View>
			</View>

			{/* .....SECOND LIST........ */}

			<View style={styles.listContainer}>
				<View style={{ flexDirection: 'row' }}>
					<View style={styles.imageContainer}>
						<Image
							source={{
								uri: 'https://i.ibb.co/8P1c3x7/new-p7-homepage-min-removebg-preview.png'
							}}
							style={{ width: 50, height: 50 }}
						/>
					</View>
					<View style={styles.titleContainer}>
						<Text style={styles.title}>Delicious Pizza</Text>
						<View style={styles.iconContainer}>
							<View style={styles.icon}>
								<Ionicons name="star" size={15} color="orange" style={{ marginRight: 2 }} />
								<Ionicons name="star" size={15} color="orange" style={{ marginRight: 2 }} />
								<Ionicons name="star" size={15} color="orange" style={{ marginRight: 2 }} />
								<Ionicons name="star" size={15} color="orange" style={{ marginRight: 2 }} />
							</View>
						</View>
						<Text style={{ color: '#AEAEAE', fontSize: 14 }}>2,1 km</Text>
					</View>
				</View>
				<View>
					<Text style={{ color: Colors.card, fontWeight: 'bold', fontSize: 18, marginRight: 10 }}>
						$14.00
					</Text>
				</View>
			</View>
		</View>
	);
};

export default RestaurantList;

const styles = StyleSheet.create({
	container: {
		marginBottom: 5
	},
	listContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '100%',
		backgroundColor: '#FFFFFF',
		borderRadius: 10,
		marginVertical: 3
	},
	imageContainer: {
		width: 65,
		height: 65,
		overflow: 'hidden',
		borderRadius: 10,
		marginRight: 3,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: Colors.card
	},
	titleContainer: {
		marginTop: 7,
		marginLeft: 4
	},
	iconContainer: {
		alignItems: 'center',
		textAlign: 'center'
	},
	icon: {
		flexDirection: 'row'
	}
});
