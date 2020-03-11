import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated, TouchableWithoutFeedback } from 'react-native';

export default class App extends Component {
  state = {
    animation: new Animated.Value(0)
  }
  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 360,
      duration: 1500
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 0,
        duration: 1500
      }).start()
    })
  }
  render() {
    const rotateInterpolation = this.state.animation.interpolate({
        inputRange: [0, 360],
        outputRange: ["0deg", "360deg"]
    })

    const boxAnimatedStyle = {
        transform: [
            { rotate: rotateInterpolation }
        ]
    }
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, boxAnimatedStyle]} />
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