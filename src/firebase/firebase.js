import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyB9EfK2HSA6JRqMosO4RjTFqzZWxEZUgbg",
    authDomain: "xpressfood-6831b.firebaseapp.com",
    projectId: "xpressfood-6831b",
    storageBucket: "xpressfood-6831b.appspot.com",
    messagingSenderId: "428863294361",
    appId: "1:428863294361:web:803d0877dbabaad148e108",
    measurementId: "G-5DCD2W98J9"
}



const app = initializeApp(firebaseConfig);

// if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
// }

const auth = getAuth(app);

export default auth;

