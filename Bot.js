document.onkeydown=function(e)
{
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
return false;
    }
}
const firebaseConfig = {
    apiKey: "AIzaSyAnCyt0mt3ABA6ubUnQBfZTeT3Yu5ORR6s",
    authDomain: "robot-3aad9.firebaseapp.com",
    databaseURL: "https://robot-3aad9-default-rtdb.firebaseio.com",
    projectId: "robot-3aad9",
    storageBucket: "robot-3aad9.appspot.com",
    messagingSenderId: "402689472452",
    appId: "1:402689472452:web:5d8e052bf08ec4485a9691",
    measurementId: "G-MYVR2HS20F"
  };
  firebase.initializeApp(firebaseConfig);
var content = '';
//var SP = window.webkitSpeechRecognition;
var VoiceRecognition = new window.webkitSpeechRecognition;
VoiceRecognition.onresult = function(event)
{
content = event.results[0][0].transcript;
console.log("Recieved voice as : " + content);
getData();
}
function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
                //Start code
                console.log("Loading Answer");
if (content.includes(childData['A'])) {
RobotSay(childData['B']);
console.log("Found Answer as : " + childData['B']);
}
                //End code
            
        });
    });
}
function RobotSay(text) 
{
  const sound = new SpeechSynthesisUtterance(text);
  sound.rate = 1;
  sound.volume = 1;
  speechSynthesis.speak(sound);
}
function Recog() {
VoiceRecognition.start();
}