/**
 * @format
 */

import {AppRegistry} from 'react-native';

import MainNavigation from './src/MainNavigation';
import {name as appName} from './app.json';
import  {store,persistor}  from "./src/redux/store"
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react"

const RoutreStack =()=>{
return(
 
<Provider store={store}>
<PersistGate loading={null} persistor={persistor}>

<MainNavigation />
</PersistGate>
</Provider>
)
}


AppRegistry.registerComponent(appName, () => RoutreStack);
