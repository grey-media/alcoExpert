import React from 'react';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from './styles';
import LoadingScreen from '../screens/LoadingScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import LoginScreen from '../screens/LoginScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AddAlcoScreen from '../screens/AddAlcoScreen';
import TimeScreen from '../screens/TimeScreen';
import StatScreen from '../screens/StatScreen';
import AddAlcoDetailScreen from '../screens/AddAlcoDetailScreen';
import TimeCalculateScreen from '../screens/TimeCalculateScreen';
import StatScreenLastAdded from '../screens/StatScreenLastAdded';

export const TimeCalculateNav = createStackNavigator(
  {
    TimeMain: TimeScreen,
    TimeCalculate: TimeCalculateScreen,
  },
  {
    initialRouteName: 'TimeMain',
    headerMode: 'none',
  },
);

export const StatNav = createStackNavigator(
  {
    StatMain: StatScreen,
    StatLast: StatScreenLastAdded,
    StatAdd: AddAlcoScreen,
    StatAddDetail: AddAlcoDetailScreen,
  },
  {
    initialRouteName: 'StatMain',
    headerMode: 'none',
  },
);

export const TabNavigator = createBottomTabNavigator(

  {
    Stat: {
      screen: StatNav,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name="chart-bar" size={28} color={tintColor} />,
      },
    },
    Time: {
      screen: TimeCalculateNav,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name="calculator" size={28} color={tintColor} />,
      },
    },
    Settings: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name="settings-outline" size={28} color={tintColor} />,
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: colors.red,
      inactiveTintColor: colors.yellow,
      showLabel: false,
      style: {
        backgroundColor: colors.dark,
        borderTopWidth: 1,
        borderTopColor: colors.mediumDark,
      },
    },
  },
);

const MainNav = createStackNavigator(
  {
    Loading: LoadingScreen,
    Login: LoginScreen,
    Profile: ProfileScreen,
    Registration: RegistrationScreen,
    Main: TabNavigator,
    AlcoDetail: AddAlcoDetailScreen,
  },
  {
    initialRouteName: 'Loading',
    headerMode: 'none',
  },
);

const RootNav = createAppContainer(MainNav);

export default class MainNavigarion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <RootNav />;
  }
}