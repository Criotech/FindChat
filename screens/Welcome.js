import React, { Component } from 'react';
import { StyleSheet, Image, Dimensions, View, Text, Button, TouchableOpacity } from 'react-native';

export default class Welcome extends Component {


    render() {
        const { container, wrapper, top, topImage, mid, midFontStyle, bottom, bottomBtn } = styles
        const { navigate } = this.props.navigation;
        return (
            <View style={container}>
                <View style={styles.logoContainer}>
                    <View style={styles.Tgrid}>
                        <Image
                            style={styles.logo}
                            source={require('./images/w.png')}
                        />
                    </View>

                </View>
                <View style={mid}>
                    <Text style={midFontStyle}>Simple, Secure.</Text>
                    <Text style={midFontStyle}>Reliable messaging</Text>
                </View>
                <View style={bottom}>
                    <TouchableOpacity onPress={() => navigate('Signup')} >
                        <View
                        style={bottomBtn}><Text style={{color: '#fff', fontSize: 15 }}> Getting Started </Text></View>
                    </TouchableOpacity>
                    <View style={{marginTop: 40}}>
                        <Text>Already have an account? <Text style={{color: 'red'}}>Login</Text> </Text>
                    </View>

                </View>

            </View>
        );
    }

}

const window = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    logoContainer: {
        height: Dimensions.get('window').width / 1.5,
        paddingTop: 80,
        alignItems: 'center',
    },
    Tgrid: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    logo: {
        height: 50,
        width: 90,
    },
    mid: {
        flex: 1,
        alignItems: 'center'
    },
    midFontStyle: {
        fontSize: 20,
        fontWeight: 'bold',
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
        paddingLeft: 60,
        paddingRight: 60,
        borderRadius: 60,
        elevation: 2
    }
});
