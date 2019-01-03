import React from 'react';
import { View, StyleSheet, Dimensions, Text, ListView } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import ListedView from './ListedView';
import GiftedView from './GiftedView';
import axios from 'axios';


export default class TabBar extends React.Component {
    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        this.state = {
            dataSource: ds.cloneWithRows([]),
            listTrees: []
        };
    }

    getListTree = () => {
        // console.log('vao')
        axios.get('')
        .then(res => {
            if (res.data.success == true) {
                let temp = res.data.data.map((item, key) => {
                    item.key = key
                    return item
                })
                const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
                // console.log(temp)
                this.setState(
                    {
                        listTrees: temp,
                        dataSource: ds.cloneWithRows(temp)
                    }, () => 
                    console.log(this.state)
                )
            }
            else {
                alert(res.data.data)
            }
        })
    }

    componentDidMount() {
        this.getListTree()
    }
    
    render() {
        let temp = this.state.listTrees;
        return (
            <ScrollableTabView style={{ height: 500 }}>
                <ListedView tabLabel="List" dataSource={this.state.dataSource} />
                <GiftedView tabLabel="Gift" />
            </ScrollableTabView >
            //  </View>
        );
    }
}