import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyBnvj2KmNzTl53zKzSBbeG5N2oN057gL_A",
    authDomain: "archcity-cmr.firebaseapp.com",
    databaseURL: "https://archcity-cmr.firebaseio.com",
    projectId: "archcity-cmr",
    storageBucket: "archcity-cmr.appspot.com",
    messagingSenderId: "842459017715",
    appId: "1:842459017715:web:a1f6578ed20709da00e286",
    measurementId: "G-9F3PNWJKSS"
}

firebase.initializeApp(config)

export const fire = firebase
export const db = firebase.firestore()

