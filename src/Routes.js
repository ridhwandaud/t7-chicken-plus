import HomeScreen from './containers/HomeScreen';
import About from './containers/About';
import Support from './containers/Support';
import Sponsors from './containers/Sponsors';
import CharacterSelect from './containers/CharacterSelect';
import CharacterProfile from './containers/CharacterProfile';


import { createStackNavigator } from 'react-navigation';

const defaultNavOptions = {
    headerStyle: {
        backgroundColor: 'transparent'
    }
};

export const RootStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: defaultNavOptions
    },
    About: {
        screen: About,
        navigationOptions: defaultNavOptions
    },
    Sponsors: {
        screen: Sponsors,
        navigationOptions: defaultNavOptions
    },
    Support: {
        screen: Support,
        navigationOptions: defaultNavOptions
    },
    CharacterSelect: {
        screen: CharacterSelect,
        navigationOptions: defaultNavOptions
    },
    CharacterProfile: {
        screen: CharacterProfile,
        navigationOptions: defaultNavOptions
    },
    initialRouteName: 'Home',
});