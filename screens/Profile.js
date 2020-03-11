import React, { Component } from 'react';
import { StyleSheet, Image, Dimensions, Text, View, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Input } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements';


export default class ImagePickerExample extends React.Component {
    state = {
        image: null,
    };

    componentDidMount() {
        this.getPermissionAsync();
        console.log('hi');
    }

    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    }

    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });

        console.log(result);

        if (!result.cancelled) {
            this.setState({ image: result.uri });
        }
    };

    render() {
        let { image } = this.state;
        const { container, top, mid, input, h1, h2, bottomBtn, bottom } = styles;
        const { navigate } = this.props.navigation;
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : null}
                style={container}
            >
                <View style={top}>
                    <Avatar
                        rounded
                        source={{
                            uri: image,
                        }}
                        size="large"
                        onPress={this._pickImage}
                    />

                </View>
                <View style={mid}>
                    <Text style={h1}>Here we go!</Text>
                    <Text style={h2}>Please provide your name and an optional profile picture</Text>

                </View>
                <View style={input}>
                    <Input
                        placeholder='Your Name'
                    />
                </View>
                <View style={bottom}>
                    <TouchableOpacity onPress={() => navigate('Main')} >
                        <View
                            style={bottomBtn}><Text style={{ color: '#fff', fontSize: 15, textAlign: 'center' }}> Finish </Text></View>
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
        paddingLeft: 20,
        paddingRight: 20,
    },
    top: {
        paddingTop: 20,
    },
    mid: {
        marginTop: 30,
        width: Dimensions.get("window").width / 1.4,
    },
    h1: {
        fontWeight: 'bold',
        fontSize: 22,
        color: '#000000'
    },
    h2: {
        color: '#434f5b',
    },
    input: {
        marginTop: 20,
        width: Dimensions.get("window").width / 1.4,

    },
    bottom: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'center'
    },
    bottomBtn: {
        backgroundColor: '#000000',
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 60,
        paddingRight: 60,
        borderRadius: 60,
        elevation: 2,
    }
});