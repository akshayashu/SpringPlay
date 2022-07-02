import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from '../screens/HomeScreen'
import SongScreen from '../screens/SongScreen'
import LoginScreen from '../screens/LoginScreen';
import AuthenticationScreen from '../screens/AuthenticationScreen'


const screens = {
  AuthenticationScreen: {
    screen: AuthenticationScreen,
    navigationOptions: {
      headerShown: false,
    }
  },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      headerShown: false,
    }
  },
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      headerShown: false,
    }
  },
  SongScreen: {
    screen: SongScreen,
    navigationOptions: {
      headerShown: false,
    }
  },
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);