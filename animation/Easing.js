import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated, Easing, TouchableWithoutFeedback } from 'react-native';
// import { Easing } from 'react-native-reanimated';

export default class App extends Component {
  state = {
    animation: new Animated.Value(0)
  }

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 300,
      duration: 500, 
    //   easing: Easing.back(5),
    //   easing: Easing.bounce,
    //   easing: Easing.elastic(3),
      easing: Easing.bezier(.06,1,.86,.23)
    }).start()
    }
  render() {
    const animatedStyles = {
        transform: [
            { translateY: this.state.animation }
        ]
    }
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedStyles ]} />
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