import React, { Component } from 'react';
import{
    Image,
    StyleSheet,
    TouchableHighlight,
    Text,
    View
} from 'react-native';
import {StackNavigator, navigate} from 'react-navigation'

class Main extends Component {
    static navigationOptions = {
      title: 'Welcome',
      headerStyle: {
        position: 'absolute',
        backgroundColor: 'transparent',
        zIndex: 100,
        top: 250,
        left: 162,
        right: 138,
      },
      headerTintColor:"#bdbdbd"
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Image  style={styles.backgroundImg} source={require('./../Image/abstract2.jpg')} 
                    onLayout={this._onLayoutDidChange}>
                <TouchableHighlight onPress={() => navigate('SignIn')}
                                    underlayColor ="#efefef" style={styles.submitBtn1}>
                    <Text style={styles.submitText}>Login</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={()=>navigate('SignUp')}
                                    underlayColor ="#efefef" style={styles.submitBtn2}>
                    <Text style={styles.submitText}>Sign-up</Text>
                </TouchableHighlight>
            </Image>
        );
    }
}

const styles = StyleSheet.create({
    submitBtn1:{
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#6aB666',
        borderRadius: 5,
        height: 40,
        justifyContent: 'center',
        marginBottom: 20,
        marginLeft: 165,
        marginTop: 300,
        width: 100,
        paddingLeft: 20,
        paddingRight: 20,
    },
    submitBtn2:{
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#6aB666',
        borderRadius: 5,
        height: 40,
        justifyContent: 'center',
        marginBottom: 40,
        marginLeft: 165,
        width: 100,
        paddingLeft: 20,
        paddingRight: 20,
    },
    submitText:{
        color: '#6aB666',
        fontWeight: '600'
    },
    backgroundImg:{
        height: 660,
        width:420
    },
});
export default  PatientTrackApp = StackNavigator({
  Home:    { screen: Main },
//   Login:   { screen: Login},
//   SignUp:  { screen: Register},
//   Desktop: {screen: HomePage}
});
