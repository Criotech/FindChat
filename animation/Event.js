import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, View, Animated, TouchableWithoutFeedback } from 'react-native';

export default class App extends Component {
  state = {
    animation: new Animated.Value(0)
  }

  render() {
    const backgroundInterpolation = this.state.animation.interpolate({
        inputRange: [0, 3000],
        outputRange: ["rgb(255,99,71)", "rgb(99,71,255)"]
    })

    const backgroundAnimatedStyle = {
        backgroundColor: backgroundInterpolation
    }
    return (
      <View style={styles.container}>
        <ScrollView scrollEventThrottle={16} onScroll={Animated.event([
            {
                nativeEvent: {
                    contentOffset: {
                        y: this.state.animation
                    }
                }
            }
        ])}>
          <Animated.View style={[styles.content, backgroundAnimatedStyle]} />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  content: {
    height: 3000,
  }
});