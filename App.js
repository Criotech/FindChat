import React, { Component } from 'react'
import Splash from './screens/Splash';
import AppNavigation from './Navigation';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currentScreen: 'Splash'};
    setTimeout(() => {
      this.setState({ currentScreen: 'AppNavigation'})
    }, 2000);
  }

  render() {
    const { currentScreen } = this.state;
    let mainScreen = currentScreen === 'Splash' ? <Splash /> : <AppNavigation />;
        return mainScreen
  }
}

const styles = StyleSheet.create({
  
});

// import React, { Component } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import Event from './animation/Event'

// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Event />
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,

//   }
// });