import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import ProfileTab from './desktoptabs/profiletab'

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
    render() {
        return (             
                <ScrollableTabView tabBarBackgroundColor ="transparent" tabBarActiveTextColor ="navy" 
                        tabBarPosition="top"
                        ref={(tabView) => { this.tabView = tabView; }}>
                    <View tabLabel='Profile'>
                       <ProfileTab/>
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
