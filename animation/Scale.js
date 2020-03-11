import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated, TouchableWithoutFeedback } from 'react-native';

export default class App extends Component {
    state = {
        animation: new Animated.Value(1)
    }
    startAnimation = () => {
        Animated.timing(this.state.animation, {
            toValue: 2,
            duration: 1500
        }).start()
    }
    render() {
        const animatedStyles = {
            transform: [
                {
                    scale: this.state.animation
                }
            ]
        }
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={this.startAnimation}>
                    <Animated.View style={[styles.box, animatedStyles]} />
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    box: {
        width: 150,
        height: 150,
        backgroundColor: 'tomato',
    }
});