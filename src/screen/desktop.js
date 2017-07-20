import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TextInput,
  Alert,
  TouchableHighlight,
  Button,
  TouchableOpacity
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';

export default class Desktop extends Component {
    static navigationOptions = ({ navigation }) => ({
    title: 'How u doing Doc?',
      headerStyle: {
        position: 'absolute',
        backgroundColor: 'transparent',
        zIndex: 100,
        top: 120,
        left: 140,
        right: 142,
      },
      headerTintColor:"#bdbdbd"
    });
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    
        this.state = {
            name: "",
            email:"",
            password:""
        };
    }

    handleSubmit(e){
        e.preventDefault();
    }

    render() {
        return (
                <ScrollableTabView
                        tabBarPosition="overlayBottom"
                        ref={(tabView) => { this.tabView = tabView; }}>
                    <View tabLabel='Profile'>
                        
                    </View>
                    <View tabLabel='Insert'>
                        
                    </View>
                    <View tabLabel='View History'>
                        
                    </View>
                    <View tabLabel='Search'>
                        
                    </View>
                </ScrollableTabView>
        );
    }
}

const styles = StyleSheet.create({

});