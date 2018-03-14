import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import RootNavigator from './navigation/router';

export default class App extends Component {
    render() {
        return (
            <RootNavigator />
        );
    }
}
