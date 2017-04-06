import Expo from 'expo';
import React from 'react';
import {NavigationProvider, StackNavigation, withNavigation} from '@expo/ex-navigation';
import Store from './state/Store';
import Router from './navigation/Router';
import Provider from "react-redux/src/components/Provider";

class AppContainer extends React.Component {
    render() {
        return (
            <Provider store={Store}>
                <NavigationProvider router={Router}>
                    <App {...this.props}/>
                </NavigationProvider>
            </Provider>
        )
    }
}

@withNavigation
class App extends React.Component {
    render() {
        return (
            <StackNavigation initialRoute="splashScreen"/>
        );
    }
}

Expo.registerRootComponent(AppContainer);
