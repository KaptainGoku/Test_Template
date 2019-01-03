import React from 'react';
import { View, Text, FlatList, TouchableHighlight, Image } from 'react-native';

import Fruit from '../assets/data/Mango'

let fruit = Fruit;

export default class GiftedView extends React.Component {
    render() {
        return (
            <FlatList
                horizontal={false}
                numColumns={3}
                data={fruit}
                renderItem={({ item, separators }) => (
                    <View style={{marginLeft: 20, marginBottom:30, marginTop:20, marginRight:20}}>
                        <TouchableHighlight
                            onPress={() => this._onPress(item)}
                            onShowUnderlay={separators.highlight}
                            onHideUnderlay={separators.unhighlight}>
                            <View style={{ backgroundColor: 'white' }}>
                                <Image
                                    source={require("../assets/images/test/Tree.png")}
                                    style={{ width: 80, height: 80 }}
                                />
                                <Text>{item.key} {item.amount}</Text>
                            </View>
                        </TouchableHighlight>
                    </View>

                )}
            />

        );
    }

}