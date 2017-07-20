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
        top: 120,
        left: 140,
        right: 142,
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
        return (             <Image style={styles.backgroundImg} source={require('./../Image/whiteabstract.jpg')} onLayout={this._onLayoutDidChange}>

                <ScrollableTabView tabBarBackgroundColor ="transparent" tabBarActiveTextColor ="white" 
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
                        </Image>
        );
    }
}

const styles = StyleSheet.create({
  backgroundImg:{
height: 660,
        width:420
    },
});