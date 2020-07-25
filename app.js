var firebaseConfig = {
  apiKey: "AIzaSyDSrxfl5toIdD84E1-pY0uQ_cKSYPY0Gfo",
  authDomain: "maps-test-277405.firebaseapp.com",
  databaseURL: "https://maps-test-277405.firebaseio.com",
  projectId: "maps-test-277405",
  storageBucket: "maps-test-277405.appspot.com",
  messagingSenderId: "879920170278",
  appId: "1:879920170278:web:07c1eea4d5d140ac4a6de7",
  measurementId: "G-XTM36DF1HD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

let contactosRef = firebase.database().ref('contactosWeb');
document.getElementById('alertInfo').style.display= 'none';


document.getElementById('formContacto').addEventListener('submit', guardarFormulario);

function guardarFormulario(e){
    e.preventDefault();
    let nombre = document.getElementById('txtNombre').value;
    let email = document.getElementById('txtEmail').value;
    let comentario = document.getElementById('txtComentario').value;

    let nuevoComentarioRef = contactosRef.push();
        nuevoComentarioRef.set({
            email: email,
            nombre: nombre,
            comentario: comentario
    });

    document.getElementById('alertInfo').style.display= 'block';

    document.getElementById('formContacto').reset();

    setTimeout(function(){
        document.getElementById('alertInfo').style.display= 'none';
    }, 2000);
    contactosRef.on("value", function(snapshot) {
      console.log("lista de datos",snapshot.val());
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
}