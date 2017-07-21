import React, { Component } from 'react';
import  {
    Text,
    View, 
    ScrollView,
    StyleSheet 
} from 'react-native';
import { Card, ListItem, Button, Divider, Avatar, FormLabel, FormInput} from 'react-native-elements'

export default class InsertTab extends Component {
    render() {
        return (
        <ScrollView ref={(scrollView) => { _scrollView = scrollView; }} automaticallyAdjustContentInsets={true}>
            <Card title='Patient Bio'>
                <View style={{marginLeft: 150}}>
                    <Avatar rounded activeOpacity={0.7}
                        source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}}
                        onPress={() => console.log("Works!")}/>
                </View>
                <Text style={styles.DocName}>
                    Insert Image
                </Text>
                <Divider style={styles.divider} />
                <View>
                    <FormLabel>Full Name</FormLabel>
                    <FormInput />
                    <FormLabel>Age</FormLabel>
                    <FormInput />
                    <FormLabel>Date</FormLabel>
                    <FormInput />
                    <FormLabel>Sex</FormLabel>
                    <FormInput />
                    <FormLabel>description</FormLabel>
                    <FormInput />
                </View>
                <Button iconRight title='Submit'/>
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