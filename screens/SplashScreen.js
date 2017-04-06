import React from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import Router from '../navigation/Router';
const TimerMixin = require('react-timer-mixin') ;

export default class SplashScreen extends React.Component {

    _goToScreen() {
        TimerMixin.setTimeout(() =>
        {this.props.navigator.push(Router.getRoute('home')); }
        , 2000);
    }

    _goToScreenByPress = () => {
        this.props.navigator.push(Router.getRoute('home'));
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'green', alignItems:'center', justifyContent: 'center'}}>
                <TouchableOpacity style={{backgroundColor: 'white'}} onPress={this._goToScreenByPress.bind(this)}>
                    <Text>
                        Wait or Press me!
                    </Text>
                </TouchableOpacity>
                <ActivityIndicator size='large'/>
                {this._goToScreen()}
            </View>
        )
    }
}

