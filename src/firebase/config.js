import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import 'firebase/database';

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
        //this.database= firebase.database();
        this.storage = firebase.storage();
        this.googleProvider = new firebase.auth.GoogleAuthProvider();
        this.facebookProvider = new firebase.auth.FacebookAuthProvider();
        this.twitterProvider = new firebase.auth.TwitterAuthProvider();
        this.githubProvider = new firebase.auth.GithubAuthProvider();
        
    }

    isInitialized() {
		return new Promise(resolve => {
			this.auth.onAuthStateChanged(resolve)
		})
    }
    //google sign in

    doSignInWithGoogle = () =>
    this.auth.signInWithPopup(this.googleProvider);

    //Facebook sign in

    doSignInWithFacebook = () =>
    this.auth.signInWithPopup(this.facebookProvider);
    
    //twitter sign in

    doSignInWithTwitter = () =>
    this.auth.signInWithPopup(this.twitterProvider);

    // Git hub sign in
    doSignInWithGithub = () =>
    this.auth.signInWithPopup(this.githubProvider);


    //Register / Sign Up
    async register(name, email, password,phonenumber) {
      await this.auth.createUserWithEmailAndPassword(email, password)

      firebase.database().ref('Registered users/' + name).set({
        username: name,
        email: email,
        phoneNumber:phonenumber
      });

      return this.auth.currentUser.updateProfile({
        displayName: name,
        phoneNumber: phonenumber
      })
    }
    // Login
    login(email, password) {
      firebase.database().ref('Login User/' ).set({
        email: email,
        
      });

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

  //Data Store
  stockInfo(count,store)
  {
    firebase.database().ref('stocks/' + count).set({
      stocks:store
    });
  }

}
export default new Firebase();