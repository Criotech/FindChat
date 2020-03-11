import React, { Component } from 'react';
import { StyleSheet, Image, Dimensions, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';

export default class Verify extends Component {
    constructor(props) {
        super(props);
        this.state = { value: ''};
      }
      
      onChangeText(text) {
          this.setState(prevState=> ({
              value: prevState.value+text
          }))
      }
    render() {
        const { container, top, topLogo, mid, h1, bottom, inputs, input, bottomBtn } = styles;
        if (this.state.value.length==4){
            this.props.navigation.navigate('Profile')
            this.setState({
                value: ''
            })
        } 
        return (
            <KeyboardAvoidingView style={container} behavior="padding" enabled>
                <View style={top}>
                    <Image style={topLogo} source={require('./images/w.png')} />
                </View>
                <View style={mid}>
                    <Text style={h1}>Verification</Text>
                    <Text>We have sent an SMS with a code to the number you have provided.</Text>
                </View>
                <View style={bottom}>
                    <View style={inputs}>
                        <TextInput
                            style={input} keyboardType={'numeric'}
                            onChangeText={this.onChangeText.bind(this)}
                            value={this.state.value.split('')[0]||''}
                        />
                        <TextInput
                            style={input}
                            keyboardType={'numeric'}
                            onChangeText={this.onChangeText.bind(this)}
                            value={this.state.value.split('')[1]||''}
                        />
                        <TextInput
                            style={input}
                            keyboardType={'numeric'}
                            onChangeText={this.onChangeText.bind(this)}
                            value={this.state.value.split('')[2]||''}

                        />
                        <TextInput
                            style={input}
                            keyboardType={'numeric'}
                            onChangeText={this.onChangeText.bind(this)}
                            value={this.state.value.split('')[3]||''}

                        />

                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ color: '#543f3f' }}>Resend Code in 2:50</Text>
                    </View>

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
    topLogo: {
        height: 50,
        width: 90,
    },
    mid: {
        paddingLeft: 20,
        paddingRight: 20
    },
    h1: {
        fontWeight: 'bold',
        fontSize: 22,
    },
    bottom: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20
    },
    inputs: {
        marginTop: 20,
        flexDirection: 'row',
    },
    input: {
        elevation: 2,
        height: 50,
        width: 50,
        marginRight: 10,
        borderColor: 'gray',
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20
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
