import React from 'react';

import { 
	TabNavigator, 
	StackNavigator,
	DrawerNavigator,
	TabBarBottom,
	HeaderBackButton,
} from 'react-navigation';

import ExampleScreen from '../components/ExampleScreen';
import Placeholder from '../components/Placeholder';
import DismissModal from '../components/DismissModal';

const Tabs = TabNavigator({
	One: {
		screen: props => <ExampleScreen {...props} {...{display: 'First Tab'}} />,
		navigationOptions: {
			title: 'Tab',
		},
	},
	Two: {
		screen: Placeholder,
	},
	Three: {
		screen: props => <ExampleScreen {...props} {...{display: 'Third Tab'}} />,
		navigationOptions: {
			title: 'Tab',
		},
	},
}, {
	tabBarComponent: ({jumpToIndex, ...props, navigation }) => (
		<TabBarBottom
			{...props}
			jumpToIndex={index => {
				// The index correlates to the order the tabs are in. Specify the one
				// you want as a modal. In this case, it's the middle tab (index of 1)
				index === 1 ? navigation.navigate('TabModal') : jumpToIndex(index);
			}}
		/>
	),
});

const RootNavigator = StackNavigator({
	RootTabs: {
		screen: Tabs,
	},
	TabModal: {
		screen: props => <ExampleScreen {...props} {...{display: "I'm a modal!"}} />,
		navigationOptions: ({ navigation }) => ({
			title: 'Modal',
			gesturesEnabled: false,
			headerLeft: <DismissModal navigation={navigation} /> 
		}),
	},
}, {
	initialRoute: 'RootTabs',
	mode: 'modal',
});

export default RootNavigator;
