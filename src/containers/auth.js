import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAu90YPz2r15z-qybtliO7QiPZq-UDMGUY",
    authDomain: "fir-reactauth-351a5.firebaseapp.com",
    databaseURL: "https://fir-reactauth-351a5.firebaseio.com",
    projectId: "fir-reactauth-351a5",
    storageBucket: "fir-reactauth-351a5.appspot.com",
    messagingSenderId: "309796179953",
    appId: "1:309796179953:web:5e42c8c69e00befa02be50"
  };

const fire=firebase.initializeApp(firebaseConfig);


export default fire;