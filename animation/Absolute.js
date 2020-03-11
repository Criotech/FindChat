import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated, TouchableWithoutFeedback } from 'react-native';

export default class App extends Component {
  state = {
    animation: new Animated.Value(0)
  }
  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 0,
      duration: 350
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 40,
        duration: 1500
      }).start()
    })
  }
  render() {
    const animatedStyles = {
      top: this.state.animation,
      left: this.state.animation,
      right: this.state.animation
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
    position: 'absolute',
    height: 150,
    backgroundColor: 'tomato',
  }
});