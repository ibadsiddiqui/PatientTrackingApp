import React, { Component } from 'react';
import  {
    Text,
    View, 
    ScrollView,
    StyleSheet 
} from 'react-native';
import { Card, FormInput, FormLabel, Divider } from 'react-native-elements'

export default class SearchTab extends Component {
    render() {
        return (
        <ScrollView ref={(scrollView) => { _scrollView = scrollView; }} automaticallyAdjustContentInsets={true}>
            <Card >
                <FormLabel>Search</FormLabel>
                <FormInput/>
            </Card>
            <Divider style={{marginTop: 20, marginLeft: 66,backgroundColor: 'black', width: 300}} />
            <Card >
                <FormLabel>Search</FormLabel>
                <FormInput/>
            </Card>
        </ScrollView>
            
        );
    }
}

const styles = StyleSheet.create({
    DocName:{
        marginTop: 20, 
        textAlign:'center', 
        fontWeight: "700", 
        marginBottom: 15
    },
    divider:{
        backgroundColor: 'blue',

    }
})