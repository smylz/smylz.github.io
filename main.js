
  // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyCYfzRwqmeedZl1STCDCA2dl4yllEsaDhY",
    authDomain: "brompton-solicitors.firebaseapp.com",
    databaseURL: "https://brompton-solicitors.firebaseio.com",
    projectId: "brompton-solicitors",
    storageBucket: "brompton-solicitors.appspot.com",
    messagingSenderId: "369474610044",
    appId: "1:369474610044:web:d9defe72dce3cfaa39faf9",
    measurementId: "G-TGTBRG6V2M"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();


// Reference Messages Collection
var messagesRef = firebase.database().ref('messages');


// Listen for form submit
document.getElementById('contact').addEventListener('submit', submitForm);

//Submit Form
function submitForm(e) {
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var subject = getInputVal('subject');
  var message = getInputVal('message');

  // Save Message
  saveMessage(name, email, subject, message);


  // Show Alert
  document.querySelector('.alert').style.display = 'block';

  // Hide Alert After 3 Secs
  setTimeout(function () {
    document.querySelector('.alert').style.display = 'none';
  }, 3000);

  // Clear Form
  document.getElementById('contact').reset();

}


// Function to get form values
function getInputVal(id) {
  return document.getElementById(id).value;

}

//save message to firebase
function saveMessage(name, email, subject, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    subject: subject,
    message: message,
  });
}