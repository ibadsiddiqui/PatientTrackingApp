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
        top: 50,
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
                                    underlayColor ="#efefef" style={styles.submitBtn}>
                    <Text style={styles.submitText}>Login</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={()=>navigate('SignUp')}
                                    underlayColor ="#efefef" style={styles.submitBtn}>
                    <Text style={styles.submitText}>Sign-up</Text>
                </TouchableHighlight>
            </Image>
        );
    }
}

const styles = StyleSheet.create({
    submitBtn:{
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,1)',
        borderRadius: 5,
        height: 40,
        justifyContent: 'center',
        marginBottom: 40,
        marginLeft: 145,
        marginTop: 100,
        width: 100,
        paddingLeft: 20,
        paddingRight: 20,
    },
    submitText:{
        color: '#666666',
        fontWeight: '600'
    },
     backgroundImg:{
    height: 660,
    width:420
  },
  backgroundImg1:{
    height: 660,
    width:420
  },

  WelcomePageSubHead:{
    textAlign: "center",
    color: "white",
    fontSize: 15,
    marginTop: 550,
    marginBottom: 10
  },
  WelcomePageSubHead2:{
    textAlign: "center",
    color: "white",
    fontSize: 15,
    marginBottom: 10
  },
});
export default  PatientTrackApp = StackNavigator({
  Home:    { screen: Main },
//   Login:   { screen: Login},
//   SignUp:  { screen: Register},
//   Desktop: {screen: HomePage}
});
