var firebaseConfig = {
    apiKey: "AIzaSyCL4WV4nwu_Ke87vmzgMB3jzDJwi9aljeo",
    authDomain: "oussfit2020.firebaseapp.com",
    databaseURL: "https://oussfit2020.firebaseio.com",
    projectId: "oussfit2020",
    storageBucket: "oussfit2020.appspot.com",
    messagingSenderId: "710826701306",
    appId: "1:710826701306:web:2ebcba6b9c0d64768e3443",
    measurementId: "G-49N6RDQD2F"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

document.getElementById('fireForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('textarea').value;
    saveMessage(name, email, phone, message);
}

function saveMessage(name, email, phone, message) {
    var messageRef = firebase.database().ref('contact/' + name);
    messageRef.set({
        name: name,
        email: email,
        phone: phone,
        message: message
    });
}