import {createRouter} from '@expo/ex-navigation';

import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';

export default createRouter(() => ({
   splashScreen: () => SplashScreen,
   home: () => HomeScreen
}), {
   _ignoreSerializableWarnings: true
});