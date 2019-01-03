import React from 'react';
import { View, ScrollView, Image } from 'react-native';
import { FormLabel, FormInput, Button, Text } from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';



export default class Form extends React.Component {
    executeText(name, value) {
        this.setState({ [name]: value })
    }

    _onPressSubmit() {
        console.log("press!")
        alert("No");
    }


    render() {
        return (
            <ScrollView>
                <Image
                    source={
                        __DEV__
                            ? require('../assets/images/robot-dev.png')
                            : require('../assets/images/robot-prod.png')
                    }
                />
                <View>
                    <FormLabel >ID tree</FormLabel>
                    <FormInput onChangeText={(e) => this.executeText('idTree', e)} />
                    <View style={{ width: 500, height: 1, backgroundColor: 'black' }}></View>
                </View>
                <View>
                    <FormLabel>Name</FormLabel>
                    <FormInput onChangeText={(e) => this.executeText('name', e)} />
                    <View style={{ width: 500, height: 1, backgroundColor: 'black' }}></View>
                </View>
                <View>
                    <FormLabel>Category</FormLabel>
                    <FormInput onChangeText={(e) => this.executeText('category', e)} />
                    <View style={{ width: 500, height: 1, backgroundColor: 'black' }}></View>
                </View>
                <View>
                    <FormLabel>Description</FormLabel>
                    <FormInput onChangeText={(e) => this.executeText('description', e)} />
                    <View style={{ width: 500, height: 1, backgroundColor: 'black' }}></View>
                </View>
                <View>
                    <FormLabel>Time start plant </FormLabel>
                    <FormInput onChangeText={(e) => this.executeText('timeStartPlant', e)} />
                    <View style={{ width: 500, height: 1, backgroundColor: 'black' }}></View>
                </View>
                <View>
                    <FormLabel>Price</FormLabel>
                    <FormInput onChangeText={(e) => this.executeText('price', e)} />
                    <View style={{ width: 500, height: 1, backgroundColor: 'black' }}></View>
                </View>
                <View>
                    <FormLabel>Image</FormLabel>
                    <View style={{ height: 40 }} />
                    <View style={{ width: 500, height: 1, backgroundColor: 'black' }}></View>
                </View>
                <View>
                    <FormLabel>Another Image</FormLabel>
                    <FormInput onChangeText={(e) => this.executeText('amount', e)} />
                    <View style={{ width: 500, height: 1, backgroundColor: 'black' }}></View>
                </View>
                <View style={{ height: 10 }} />
                <Button
                    backgroundColor='green'
                    icon={{ name: 'envira', type: 'font-awesome' }}
                    title='SUBMIT'
                    onPress={() => this.selectPhotoTapped()}
                    textStyle={{ fontSize: 18, color: '#FFFFFF' }}
                />
                <View>
                    <FormLabel></FormLabel>
                </View>
            </ScrollView>
        );
    }
}