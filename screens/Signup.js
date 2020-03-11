import React, { Component } from 'react';
import { StyleSheet, Image, Dimensions, Text, View, topLogo, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Input } from 'react-native-elements';

export default class Verify extends Component {
  render() {
    const { container, top, mid, bottom, topLogo, h1, h2, h3, formArea, bottomBtn } = styles;
    const { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView style={container} behavior="padding" enabled>
        <View style={top}>
          <Image style={topLogo} source={require('./images/w.png')} />
        </View>
        <View style={mid}>
          <Text style={h1}>Welcome to wewechat</Text>
          <Text style={h2}>Provide your phone number so we can be able to send you confimation code.</Text>
        </View>
        <View>
          <View style={formArea}>
            <View style={{ width: Dimensions.get('window').width / 5 }}>
              <Input
                placeholder='+234'
                value='+234'
              />
            </View>
            <View style={{ width: 210 }}>
              <Input
                placeholder='Phone Number'
                keyboardType={'numeric'}
              />
            </View>
          </View>
          <View style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>
            <Text style={h3}>By continuing, you are indicating that you agree to the Privacy Policy and Terms </Text>
          </View>

        </View>
        <View style={bottom}>
          <TouchableOpacity onPress={() => navigate('Verify')} >
            <View
              style={bottomBtn}><Text style={{ color: '#fff', fontSize: 15 }}>Continue</Text></View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  top: {
    paddingTop: 20,
    height: Dimensions.get('window').width / 3,
  },
  mid: {
    marginLeft: 20,
    marginRight: 20,
  },
  bottom: {
    flex: 1
  },
  topLogo: {
    height: 50,
    width: 90,
  },
  h1: {
    fontWeight: 'bold',
    fontSize: 21,
  },
  h2: {
    color: '#434f5b',
    textAlign: "justify",
    fontSize: 14,
  },
  h3: {
    color: '#434f5b',
    textAlign: "justify",
    fontSize: 13,
  },
  formArea: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20
  },
  bottom: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  bottomBtn: {
    backgroundColor: '#000000',
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 80,
    paddingRight: 80,
    borderRadius: 60,
    elevation: 2
  }

});
