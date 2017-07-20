// import React, { Component } from 'react';
// import {
//     View,
// } from 'react-native'
// export default class ProfileTab extends Component {
//   render() {
//     return (
//       <View>
//           <Card>
//             <CardItem header>
//               <Text>NativeBase</Text>
//             </CardItem>
//             <CardItem>
//               <Body>
//                 <Text>
//                   Your text here
//                 </Text>
//               </Body>
//             </CardItem>
//             <CardItem footer>
//               <Text>
//                 GeekyAnts
//               </Text>
//             </CardItem>
//          </Card>

//       </View>
//     );
//   }
// }


import React, { Component } from 'react';
import  {
    Text,
    View, 
    ScrollView,
    StyleSheet 
} from 'react-native';

import { Card, ListItem, Button, Divider, Avatar, FormLabel, FormInput } from 'react-native-elements'
export default class ProfileTab extends Component {
    render() {

const users = [
            {
            name: 'brynn',
            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
        }];
        return (
        <ScrollView ref={(scrollView) => { _scrollView = scrollView; }} automaticallyAdjustContentInsets={true}>
          <Card title='Hello Doc!'>
            <View style={{marginLeft: 100}}>
                <Avatar xlarge rounded activeOpacity={0.7}
                    source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}}
                    onPress={() => console.log("Works!")}
                />
            </View>
            <Text style={styles.DocName}>
                Doc. Hensienberg Patrick
            </Text>
            <Divider style={styles.divider} />
            <View>
                <FormLabel>Full Name</FormLabel>
                <FormInput />
                <FormLabel>Email</FormLabel>
                <FormInput />
                <FormLabel>Password</FormLabel>
                <FormInput secureTextEntry/>
                <FormLabel>Age</FormLabel>
                <FormInput />
                <FormLabel>Qualification</FormLabel>
                <FormInput />
            </View>
            <Button
                iconRight
                title='Submit'/>

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