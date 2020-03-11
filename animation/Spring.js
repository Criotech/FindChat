import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated, TouchableWithoutFeedback } from 'react-native';

export default class App extends Component {
  state = {
    animation: new Animated.Value(0)
  }

  startAnimation = () => {
    Animated.spring(this.state.animation, {
      toValue: 2,
      friction: 2,
      tension: 160
    }).start(()=>{
        Animated.timing(this.state.animation, {
            toValue: 1,
            duration: 100
        }).start();
    })
    }
  render() {
    const animatedStyles = {
        transform: [
            { scale: this.state.animation }
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
    width: 50,
    height: 50,
    backgroundColor: 'tomato',
  }
});