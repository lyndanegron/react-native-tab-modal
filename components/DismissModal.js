import React, { Component } from 'react';
import { Button } from 'react-native';

/*
	As of now, we need to pass navigation as a parameter
	to DismissModal because withNavigation (react-navigation)
	does not work in the header component when the navigator
	is in the root navigator.

	https://github.com/react-navigation/react-navigation/issues/3524
*/

class DismissModal extends Component {
	_onPress = () => {
		this.props.navigation.goBack();
	} 
	render() {
		return <Button title='Cancel' onPress={this._onPress} />
	}
}

export default DismissModal;
