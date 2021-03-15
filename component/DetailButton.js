import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';
import Colors from '../constants/Colors';

const TopButton = () => {
	const [itemNum, setItemNum] = useState(2);
	return (
		<View>
			<View style={topStyles.topBtnContainer}>
				<View style={topStyles.leftBtn}>
					<Text style={topStyles.topBtn1}>
						<View>
							<Ionicons name="star" size={18} color="orange" style={{ marginRight: 8 }} />
						</View>
						<View>
							<Text style={{ color: Colors.primary, marginLeft: 10 }}>4,5</Text>
						</View>
					</Text>
				</View>
				{/* .........2nd Button........ */}
				<View style={topStyles.rightBtn}>
					<View style={topStyles.bottomBtnContainer}>
						<TouchableNativeFeedback onPress={() => setItemNum(itemNum - 1)}>
							<View style={topStyles.btn}>
								<Text style={topStyles.btnText}>-</Text>
							</View>
						</TouchableNativeFeedback>

						<Text style={{ paddingHorizontal: 20 }}>{itemNum}</Text>
						<TouchableNativeFeedback onPress={() => setItemNum(itemNum + 1)}>
							<View style={topStyles.btn}>
								<Text style={topStyles.btnText}>+</Text>
							</View>
						</TouchableNativeFeedback>
					</View>
				</View>
			</View>
		</View>
	);
};

const topStyles = StyleSheet.create({
	topBtnContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	leftBtn: {
		width: '40%',
		flexDirection: 'row',
		alignItems: 'center'
	},
	topBtn1: {
		width: 'auto',
		height: 'auto',
		paddingHorizontal: 25,
		paddingVertical: 15,
		backgroundColor: Colors.card,
		borderRadius: 40
	},
	bottomBtnContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '40%',
		marginLeft: 80
	},
	btn: {
		width: 30,
		height: 30,
		alignItems: 'center',
		textAlign: 'center',
		justifyContent: 'center',
		backgroundColor: Colors.secondary,
		borderRadius: 5
	},
	btnText: {
		fontSize: 20,
		fontWeight: 'bold',
		color: Colors.primary
	}
});

// .........BOTTOM BUTTON...........

const BottomButton = () => {
	return (
		<View style={bottomStyles.container}>
			<View style={bottomStyles.topBtnContainer}>
				<View style={{ ...bottomStyles.btn, backgroundColor: Colors.ternary }}>
					<Text style={{ fontWeight: 'normal' }}>Total Price</Text>
					<Text style={{ fontSize: 18, fontWeight: 'bold', color: Colors.text }}>$34.00</Text>
				</View>
				<View style={{ ...bottomStyles.btn, ...bottomStyles.btn2, backgroundColor: Colors.card }}>
					<View>
						<Ionicons name="cart" size={28} color="orange" style={{ marginRight: 8 }} />
					</View>
					<Text style={{ color: Colors.primary }}>Go To Cart</Text>
				</View>
			</View>
		</View>
	);
};

const bottomStyles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 85
	},
	topBtnContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	btn: {
		paddingLeft: 10,
		justifyContent: 'center',
		width: '48%',
		height: 60,
		borderRadius: 10,
		overflow: 'hidden'
	},
	btn2: {
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius: 10,
		paddingLeft: -16
	}
});

export { TopButton, BottomButton };
