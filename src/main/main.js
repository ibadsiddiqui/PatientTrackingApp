import React, { Component } from 'react';
import{
    Image,
    TouchableHighlight,
    Text,
    View
} from 'react-native';
class Main extends Component {
    render() {
        return (
            <Image  style={styles.backgroundImg} source={require('./../img/abstract2.jpg')} onLayout={this._onLayoutDidChange}>
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

export default Main;