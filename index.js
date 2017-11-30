import { AppRegistry  } from 'react-native'
import App from './src/index'

AppRegistry.registerComponent('rnLijinkeWeb', () => App)
AppRegistry.runApplication('rnLijinkeWeb', { rootTag: document.getElementById('react-root') })