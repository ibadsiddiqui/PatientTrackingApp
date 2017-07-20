import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';

export default class Desktop extends Component {
    static navigationOptions = ({ navigation }) => ({
    title: '',
      headerStyle: {
        position: 'absolute',
        backgroundColor: 'transparent',
        zIndex: 100,

      },
      headerTintColor:"#bdbdbd"
    });
    constructor(){
        super();
    }

    handleSubmit(e){
        e.preventDefault();
    }

    render() {
        return (             
                <ScrollableTabView tabBarBackgroundColor ="transparent" tabBarActiveTextColor ="navy" 
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
  backgroundImg:{
height: 660,
        width:420
    },
});