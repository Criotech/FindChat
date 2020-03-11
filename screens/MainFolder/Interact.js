import React from 'react';
import { StyleSheet, Image, Dimensions, Text, View, KeyboardAvoidingView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

export default class Interact extends React.Component {
    render() {
        const { container, inputView, input, sentMessage, recievedMessage } = styles

        return (
            <KeyboardAvoidingView
            keyboardVerticalOffset={-500}
            behavior={Platform.OS === "ios" ? "padding" : null}
            style={ container} >
                <View style={{ padding: 10 }}>
                    <View style={recievedMessage}>
                        <Text style={{ color: '#ffffff' }} >How are you? are you ok</Text>
                    </View>
                    <View style={sentMessage}>
                        <Text style={{ color: '#ffffff' }}>I am gud, u?</Text>
                    </View>
                </View>
                <View style={inputView}>
                    <Ionicons name="ios-map" size={38} color="#232F3B" />
                    <TextInput
                        style={input}
                    // onChangeText={text => onChangeText(text)}
                    // value={value}
                    />
                    <Ionicons name="ios-camera" size={38} color="#232F3B" />
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: "space-between"
    },
    inputView: {
        flexDirection: "row",
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10
    },
    input: { 
        height: 40, 
        borderColor: '#000000',
        borderWidth: 0.5, 
        flex: 1,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        borderRadius: 30,
        marginRight: 10,
        marginLeft: 10
    },
    sentMessage: {
        padding: 10,
        paddingRight: 20,
        paddingLeft: 20,
        borderRadius: 30,
        backgroundColor: '#000',
        flexDirection: 'row',
        alignSelf: "flex-start",
        marginBottom: 5,
    },
    recievedMessage: {
        padding: 10,
        paddingRight: 20,
        paddingLeft: 20,
        borderRadius: 30,
        backgroundColor: '#000',
        flexDirection: 'row',
        alignSelf: "flex-end",
        marginBottom: 5,
    }

});