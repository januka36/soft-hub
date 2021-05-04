import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
        apiKey: "AIzaSyBtKrWKD_hyPz0ZuWOmY6_RJ5m3FIQiUEE",
        authDomain: "chat-web-app-921b0.firebaseapp.com",
        projectId: "chat-web-app-921b0",
        storageBucket: "chat-web-app-921b0.appspot.com",
        messagingSenderId: "292474989693",
        appId: "1:292474989693:web:bca56b6271023b71839514"
};

// eslint-disable-next-line no-unused-vars
const app = firebase.initializeApp(config);

export const auth = app.auth();

export const database = app.database();

export const storage = app.storage();