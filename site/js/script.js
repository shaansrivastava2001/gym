// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBH4vujpW_0gwd_z_s7-gozz6coL8XQLO0",
    authDomain: "contactform-dff8e.firebaseapp.com",
    databaseURL: "https://contactform-dff8e-default-rtdb.firebaseio.com",
    projectId: "contactform-dff8e",
    storageBucket: "contactform-dff8e.appspot.com",
    messagingSenderId: "594068392609",
    appId: "1:594068392609:web:fbfbdd68d939f57a8a3ee0"
};

firebase.initializeApp(firebaseConfig);

var contactFormDB = firebase.database().ref("contactForm");

document.getElementById('contact-Form').addEventListener("submit",submitForm);

function submitForm(e){
    e.preventDefault();

    var name = getElementVal('name');
    var email = getElementVal('email');
    var website = getElementVal('website');
    var message = getElementVal('message');

    // console.log(name,email,website,message);

    saveMessages(name,email,website,message);

    document.querySelector('.alert').style.display = "block";

    // removing alert
    setTimeout(()=>{
        document.querySelector('.alert').style.display = "none";
    },3000);

    // reseting the form after submission
    document.getElementById('contact-Form').reset();
}

const saveMessages = (name,email,website,message)=>{
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name: name,
        email: email,
        website: website,
        message: message
    });
};

const getElementVal = (id)=>{
    return document.getElementById(id).value;    
};