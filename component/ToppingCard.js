import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';

const ToppingCard = () => {
	return (
		<View style={styles.container}>
			<View style={styles.cardContainer}>
				<View style={styles.card}>
					<View style={{ ...styles.imageContainer, marginLeft: 5, marginTop: 5 }}>
						<Image
							source={{
								uri: 'https://i.ibb.co/K659WpK/extra-hot-chilli-powder2-removebg-preview.png'
							}}
							style={{ width: 70, height: 70 }}
						/>
					</View>
					<View style={styles.btnText}>
						<Text>+</Text>
					</View>
				</View>
				{/* .......2nd Card........ */}
				<View style={styles.card}>
					<View style={{ ...styles.imageContainer, marginLeft: 5, marginTop: 5 }}>
						<Image
							source={{
								uri: 'https://i.ibb.co/3WGpJ1y/sauce-removebg-preview.png'
							}}
							style={{ width: 70, height: 70 }}
						/>
					</View>
					<View style={styles.btnText}>
						<Text>+</Text>
					</View>
				</View>
				{/* .......3nd Card........ */}
				<View style={styles.card}>
					<View style={{ ...styles.imageContainer, marginLeft: 5, marginTop: 5 }}>
						<Image
							source={{
								uri: 'https://i.ibb.co/BBQxNYq/chilli3-removebg-preview.png'
							}}
							style={{ width: 70, height: 70 }}
						/>
					</View>
					<View style={styles.btnText}>
						<Text>+</Text>
					</View>
				</View>
			</View>
		</View>
	);
};

export default ToppingCard;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 10,
		width: '100%'
	},
	cardContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	card: {
		flexDirection: 'row',
		width: 80,
		height: 80,
		justifyContent: 'space-between',
		backgroundColor: Colors.primary,
		borderRadius: 10
	},
	imageContainer: {
		width: 70,
		height: 70,
		overflow: 'hidden',
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center'
	},
	btnText: {
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: -10,
		marginLeft: -5,
		width: 20,
		height: 20,
		padding: 5,
		backgroundColor: '#FBEEE2',
		borderRadius: 10
	}
});
