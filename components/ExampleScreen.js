import React, { Component } from 'react';
import { 
	View,
	Text,
	StyleSheet,
} from 'react-native';

export default class ExampleScreen extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>{this.props.display}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		fontSize: 20,
	},
});