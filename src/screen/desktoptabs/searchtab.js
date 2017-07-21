import React, { Component } from 'react';
import  {
    Text,
    View, 
    ScrollView,
    StyleSheet 
} from 'react-native';
import { Card, FormInput, FormLabel, Divider, List, ListItem } from 'react-native-elements'

export default class SearchTab extends Component {
    render() {
        const list = [
            {
                name: 'Amy Farha',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                subtitle: 'Vice President'
            },
            {
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman'
            },]

        return (
        <ScrollView ref={(scrollView) => { _scrollView = scrollView; }} automaticallyAdjustContentInsets={true}>
            <Card >
                <FormLabel>Search</FormLabel>
                <FormInput placeholder="Search by date or Name"/>
            </Card>
            <Divider style={{marginTop: 20, marginLeft: 66,backgroundColor: 'black', width: 300}} />
            <Card >
                <List containerStyle={{marginBottom: 20}}>
            {list.map((l, i) => (
                <ListItem
                    roundAvatar
                    avatar={{uri:l.avatar_url}}
                    key={i}
                    title={l.name}/>
            ))}
            </List>
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