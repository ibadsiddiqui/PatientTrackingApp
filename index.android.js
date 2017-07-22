import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import PatientTrackApp from './src/screen/main'
import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyCwFZ1vHAcTGB8YrqqEBFAYVO8mT2LWVhU",
    authDomain: "loginsignupnative.firebaseapp.com",
    databaseURL: "https://loginsignupnative.firebaseio.com",
    projectId: "loginsignupnative",
    storageBucket: "loginsignupnative.appspot.com",
    messagingSenderId: "331903238162"
  };
  firebase.initializeApp(config);
AppRegistry.registerComponent('PatientTrackApp', () => PatientTrackApp);
