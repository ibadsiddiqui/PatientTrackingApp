import React, { Component } from 'react';
import{
    Image,
    StyleSheet,
    TouchableHighlight,
    ScrollView,
    Text,
    ToastAndroid,
    TextInput,
    Alert,
    Button,
    View
} from 'react-native';
import {StackNavigator, navigate} from 'react-navigation'
import firebase from 'firebase';
export default  class Login extends Component {
    static navigationOptions = ({ navigation }) => ({
    title: 'Login',
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
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSignIn = this.handleSignIn.bind(this);

        this.state = {
            email: "",
            password: "",
        };
    }
    handleSignIn(email, password) {
        const { navigate } = this.props.navigation;        
        if (email.length < 4) {
            Alert.alert('Please enter an email address.');
            return;
        }
        if (password.length < 4) {
            Alert.alert('Please enter a password.');
            return;
        }
        // Sign in with email and pass.
        // [START createwithemail]
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // [START_EXCLUDE]
            if (errorCode == 'auth/weak-password') {
                Alert.alert('The password is in correct.');
            } else {
                Alert.alert(errorMessage);
            }
            console.log(error);
        // [END_EXCLUDE]
        });
        // [END createwithemail]
        ToastAndroid.show('Login Successful !', ToastAndroid.SHORT);
        return navigate('Desktop');
    }
        
    handleSubmit(e){
        e.preventDefault();
        this.handleSignIn(this.state.email, this.state.password);
           
    }
    render() {
        return (
            <Image style={styles.backgroundImg} source={require('./../Image/abstract2.jpg')} onLayout={this._onLayoutDidChange}>
                <View style={styles.container}>
                    <ScrollView ref={(scrollView) => { _scrollView = scrollView; }} automaticallyAdjustContentInsets={false}>
                        <View style={styles.subContainer}>
                            <Text style={styles.textAlign}>Enter ID: </Text> 
                            <TextInput style={styles.UserInput} onChangeText={(text)=>this.setState({email: text})}/> 
                        </View>
                        <View style={styles.subContainer}>
                            <Text style={styles.textAlign}>Enter Password: </Text> 
                            <TextInput secureTextEntry  style={styles.UserInput} onChangeText={(text)=>this.setState({password: text})}/>
                        </View>
                        <TouchableHighlight onPress={this.handleSubmit}
                                    underlayColor ="#efefef" style={styles.submitBtn}>
                            <Text style={styles.submitText}>Login</Text>
                        </TouchableHighlight>
                    </ScrollView>
                </View>
            </Image>
        );
    }
}

const styles = StyleSheet.create({
    backgroundImg:{
        height: 660,
        width:420
    },
    container: {
        margin: 10,
        marginTop: 220,
        marginLeft: 35,
        borderRadius: 5
    },
    submitBtn:{
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#6aB666',
        borderRadius: 5,
        height: 40,
        justifyContent: 'center',
        marginBottom: 40,
        marginLeft: 140,
        width: 100,
        paddingLeft: 20,
        paddingRight: 20,
    },
    submitText:{
        color: '#6aB666',
        fontWeight: '600'
    },
    subContainer:{
        alignItems: 'center',  
        borderRadius: 22,
        margin: 20,
        marginTop: 10,
    },
    UserInput:{
        alignItems: 'center',
        width: 280,
    }
});