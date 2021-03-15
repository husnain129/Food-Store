import React, { useLayoutEffect } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { BottomButton, TopButton } from '../component/DetailButton';
import ToppingCard from '../component/ToppingCard';
import Colors from '../constants/Colors';

const { width, height } = Dimensions.get('window');
const Details = ({ setBarStyle }) => {
	useLayoutEffect(() => {
		setBarStyle('light');
	});
	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<Image
					source={{
						uri: 'https://i.ibb.co/WV6pt75/chilli-removebg-preview.png'
					}}
					style={{ width: 300, height: 280 }}
				/>
			</View>
			<View style={styles.detalContainer}>
				<TopButton />
				<View style={styles.detail}>
					<Text style={styles.detailTitle}>Chilli paneer</Text>
					<Text style={{ ...styles.detailTitle, marginBottom: 8 }}>pockets</Text>
					<Text style={{ color: '#A1A1A1', fontSize: 14, marginBottom: 8 }}>
						is a perfect snack or appetizer which is crispy from outside and soft from inside
					</Text>
					<Text style={{ ...styles.detailTitle }}>Add toping</Text>
					<ToppingCard />
					<BottomButton />
				</View>
			</View>
		</View>
	);
};

export default Details;

const styles = StyleSheet.create({
	container: {
		width: width,
		height: height,
		backgroundColor: Colors.card
	},
	imageContainer: {
		width: 300,
		height: 290,
		marginTop: -20,
		overflow: 'hidden',
		borderRadius: 10,
		marginRight: 3,
		alignItems: 'center',
		justifyContent: 'center'
	},
	detalContainer: {
		flex: 1,
		backgroundColor: '#ffffff',
		width: '100%',
		borderTopLeftRadius: 50,
		paddingHorizontal: 25,
		paddingTop: 15
	},
	detail: {
		marginVertical: 10
	},
	detailTitle: {
		color: Colors.text,
		fontSize: 20,
		fontWeight: 'bold'
	}
});
