import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyB4orM5Bpx1cYbRcGUP-AkeD9HfpRDFd-Y",
  authDomain: "booklist-322d2.firebaseapp.com",
  databaseURL: "https://booklist-322d2.firebaseio.com",
};
firebase.initializeApp(config);

const databaseRef = firebase.database().ref();
const booksRef = databaseRef.child("books");
export default booksRef;
