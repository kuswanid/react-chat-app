import * as Firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: 'AIzaSyATt8IIVSFLcvQYRh2tIWDlXaZaFpB4KRY',
    authDomain: 'franly-fdaa2.firebaseapp.com',
    databaseURL: 'https://franly-fdaa2.firebaseio.com',
    projectId: 'franly-fdaa2',
    storageBucket: '',
    messagingSenderId: '675169803815',
    appId: '1:675169803815:web:251a23de6a33944dbe7802'
}

Firebase.initializeApp(config)

export default Firebase