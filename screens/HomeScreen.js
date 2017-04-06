import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import Menu from '../components/Menu';

const Sidemenu = require('react-native-side-menu');

class Button extends React.Component {
    handlePress(e) {
        if (this.props.onPress) {
            this.props.onPress(e);
        }
    }

    render() {
        return (
            <TouchableOpacity
                onPress={this.handlePress.bind(this)}
                style={this.props.style}>
                <Text>{this.props.children}</Text>
            </TouchableOpacity>
        );
    }
}

export default class HomeScreen extends React.Component {
    state = {
        isOpen: false,
        selectedItem: 'Login',
    };

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    updateMenuState(isOpen) {
        this.setState({ isOpen, });
    }

    onMenuItemSelected = (item) => {
        this.setState({
            isOpen: false,
            selectedItem: item,
        });
    }

    render() {
        const menu = <Menu onItemSelected={this.onMenuItemSelected}/>;
        return (
            <Sidemenu
                menu={menu}
                isOpen={this.state.isOpen}
                onChange={(isOpen) => this.updateMenuState(isOpen)}>
                <View style={styles.container}>
                    <Text style={styles.welcome}>
                        Home Screen
                    </Text>
                    <Text style={styles.instructions}>
                        Current selected menu item is: {this.state.selectedItem}
                    </Text>
                </View>
                <Button style={styles.button} onPress={() => this.toggle()}>
                    <Image
                        source={require('../assets/icons/app.png')} style={{width: 50, height: 50}}/>
                </Button>
            </Sidemenu>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        top: 20,
        padding: 10,
    },
    caption: {
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
