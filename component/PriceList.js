import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DataTable } from 'react-native-paper';
import Colors from '../constants/Colors';

const PriceList = () => {
	return (
		<View style={styles.container}>
			<DataTable>
				<DataTable.Header>
					<DataTable.Title>Dessert</DataTable.Title>
					<DataTable.Title numeric>Calories</DataTable.Title>
					<DataTable.Title numeric>Fat</DataTable.Title>
				</DataTable.Header>

				<DataTable.Row>
					<DataTable.Cell>Frozen yogurt</DataTable.Cell>
					<DataTable.Cell numeric>159</DataTable.Cell>
					<DataTable.Cell numeric>6.0</DataTable.Cell>
				</DataTable.Row>

				<DataTable.Row>
					<DataTable.Cell>Ice cream sandwich</DataTable.Cell>
					<DataTable.Cell numeric>237</DataTable.Cell>
					<DataTable.Cell numeric>8.0</DataTable.Cell>
				</DataTable.Row>

				{
					<DataTable.Pagination
					// page={1}
					// numberOfPages={3}
					// onPageChange={(page) => {
					// 	console.log(page);
					// }}
					// label="1-2 of 6"
					/>
				}
			</DataTable>
			<View style={styles.button}>
				<View style={styles.btnView}>
					<View>
						<Text style={{ color: Colors.primary, fontSize: 20, fontWeight: 'normal', marginRight: 10 }}>
							Checkout
						</Text>
					</View>
					<View style={styles.icon}>
						<Ionicons name="arrow-forward-outline" size={30} color="orange" style={{ marginRight: 2 }} />
					</View>
				</View>
			</View>
		</View>
	);
};

export default PriceList;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-between',
		marginTop: 5,
		backgroundColor: Colors.primary,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		padding: 5
	},
	button: {
		justifyContent: 'center',
		width: '90%',
		height: 70,
		backgroundColor: Colors.card,
		borderRadius: 20
	},
	btnView: {
		flexDirection: 'row',
		justifyContent: 'center'
	},
	icon: {
		// marginTop: -2
	}
});
