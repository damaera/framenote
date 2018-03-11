import './promise-polyfill'
import { app } from './app'

// import firebase from 'firebase'
// import 'firebase/firestore'
// const config = {
//   apiKey: 'AIzaSyAWWETWoJ3otKWxbRqIdDdmCoBPd0uaNnE',
//   authDomain: 'testset-972a1.firebaseapp.com',
//   databaseURL: 'https://testset-972a1.firebaseio.com',
//   projectId: 'testset-972a1',
//   storageBucket: 'testset-972a1.appspot.com',
//   messagingSenderId: '121165212915'
// }
// firebase.initializeApp(config)

// Enable progressive web app support (with offline-plugin)
if (process.env.NODE_ENV === 'production') {
  require('./pwa')
}

app.$mount('#app')
