import React from 'react';
import { View, ListView, StyleSheet, Text, Image, ScrollView } from 'react-native';
import Fruit from '../assets/data/Mango'
import { colors } from 'react-native-elements';
import axios from 'axios';
const fruit = Fruit;

export default class ListedView extends React.Component {
    constructor(props) {
        super(props)
    }
    // 


    renderRow(rowData) {
        console.log(rowData)
        return (
            <View style={{ flexDirection: 'row', flex: 1, marginBottom: 50, marginTop: 10, alignItems: 'center' }}>
                <Image
                    source={require("../assets/images/test/Tree.png")}
                    style={{ width: 80, height: 80 }}
                />
                <Text style={{ margin: 20 }}>{rowData.name} {rowData.amount} </Text>
            </View>
        );
    }
    render() {
        console.log(this.props)
        return (
            <View style={{ flex: 1 }}>
                <ListView
                    //style={styles.container}
                    dataSource={this.props.dataSource}
                    initialListSize={5}
                    //rederRow = {(data) => <Row {...Data}/>}
                    renderRow={data => (this.renderRow(data))}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
});