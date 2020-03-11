import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated, TouchableWithoutFeedback } from 'react-native';

export default class App extends Component {
    state = {
        animation: new Animated.Value(150)
    }
    startAnimation = () => {
        Animated.timing(this.state.animation, {
            toValue: 300,
            duration: 1500
        }).start(() => {
            Animated.timing(this.state.animation, {
                toValue: 150,
            }).start()
        })
    }
    render() {
        const animatedStyles = {
            width: this.state.animation,
            height: this.state.animation,
        }
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={this.startAnimation}>
                    <Animated.View style={[styles.box, animatedStyles]}>
                        <Text>This is NigeriaThis is NigeriaThis is NigeriaThis is NigeriaThis is NigeriaThis is NigeriaThis is Nigeria</Text>
                    </Animated.View>
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