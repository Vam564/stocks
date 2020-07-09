import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const config = {

    apiKey: "AIzaSyCRAIrj7PEk9Vvn3n8OY29TKAJW-EfxMxs",
    authDomain: "stock-management-57cae.firebaseapp.com",
    databaseURL: "https://stock-management-57cae.firebaseio.com",
    projectId: "stock-management-57cae",
    storageBucket: "stock-management-57cae.appspot.com",
    messagingSenderId: "1051140218267",
    appId: "1:1051140218267:web:e762a75ebbaa1aff10d53e",
    measurementId: "G-8JCDCJTGE4"

}
class Firebase {

    constructor() {
        firebase.initializeApp(config);
        this.auth = firebase.auth();
        this.db = firebase.firestore();
        this.storage = firebase.storage();
    }

    isInitialized() {
		return new Promise(resolve => {
			this.auth.onAuthStateChanged(resolve)
		})
    }

    //Register / Sign Up
    async register(name, email, password,phonenumber) {
      await this.auth.createUserWithEmailAndPassword(email, password)
      return this.auth.currentUser.updateProfile({
        displayName: name,
        phoneNumber: phonenumber
      })
    }
    // Login
    login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password)
  }
    
   //Logout
    async logout(){
    const logout = await firebase.auth().signOut().catch(err => {
        console.log(err);
        return err;
    });
    return logout;
}
// firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     // User is signed in.
//   } else {
//     // No user is signed in.
//   }
// });
// var user = firebase.auth().currentUser;

// if (user) {
//   // User is signed in.
// } else {
//   // No user is signed in.
// }
    //Get User Details
    async getUser(){
      var user = firebase.auth().currentUser;
      return user
    }

    async getUserState(){
      return new Promise(resolve=> {
          this.auth.onAuthStateChanged(resolve);
      });
  }

}
export default new Firebase();