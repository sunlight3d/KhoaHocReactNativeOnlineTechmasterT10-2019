/**
 * @format
 * yarn add react-native-svg
 */

import {AppRegistry} from 'react-native';
import DetailSong from './components/DetailSong';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => DetailSong);
