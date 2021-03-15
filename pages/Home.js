import { Ionicons } from '@expo/vector-icons';
import React, { useLayoutEffect } from 'react';
import { Dimensions, Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import FoodCard from '../component/FoodCard';
import FoodItems from '../component/FoodItems';
import RestaurantList from '../component/RestaurantList';
import Colors from '../constants/Colors';

const { width, height } = Dimensions.get('window');
const Home = ({ setBarStyle }) => {
	useLayoutEffect(() => {
		setBarStyle('default');
	});
	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.home}>
				<View style={styles.titleContainer}>
					<Text style={styles.title1}>Hello Gavriel</Text>
					<Text style={styles.title2}>Welcome Back!</Text>
				</View>
				<View style={styles.search}>
					<Ionicons name="search-outline" size={25} color="red" style={{ marginRight: 15 }} />
					<TextInput placeholder="Search" style={{ width: '100%' }} />
				</View>
				<FoodItems />
				<View style={styles.favorite}>
					<Text style={{ color: '#595959', fontSize: 17 }}>Favorite</Text>
					<FoodCard />
				</View>
				<View style={styles.restaurants}>
					<View style={styles.restaurantTitle}>
						<Text style={{ color: '#595959', fontSize: 17 }}>More restaurants</Text>
						<Text style={{ color: '#C6905C', fontSize: 16 }}>See all</Text>
					</View>
					<RestaurantList />
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default Home;

const styles = StyleSheet.create({
	home: {
		flex: 1,
		flexDirection: 'column',
		width: width,
		height: height,
		backgroundColor: Colors.primary
	},
	titleContainer: {
		marginTop: 50,
		marginLeft: 40
	},
	title1: {
		fontWeight: 'bold',
		fontSize: 18,
		fontSize: 18,
		color: Colors.card
	},
	title2: {
		fontWeight: 'bold',
		fontSize: 23,
		color: Colors.card
	},
	search: {
		flexDirection: 'row',
		marginHorizontal: '10%',
		marginTop: 10,
		backgroundColor: '#FFFFFF',
		padding: 10,
		borderRadius: 10,
		fontSize: 20
	},
	favorite: {
		height: 'auto',
		marginHorizontal: '10%',
		marginBottom: 10,
		marginTop: -10
	},
	restaurants: {
		marginHorizontal: '10%'
	},
	restaurantTitle: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	}
});
