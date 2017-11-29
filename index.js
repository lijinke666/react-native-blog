import { AppRegistry } from 'react-native';
import App from './app';

AppRegistry.registerComponent('rnLijinkeWeb', () => App);
//在浏览器运行
AppRegistry.runApplication('rnLijinkeWeb', { rootTag: document.getElementById('react-root') })
