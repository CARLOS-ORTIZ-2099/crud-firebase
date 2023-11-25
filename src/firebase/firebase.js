import {initializeApp} from 'firebase/app'

import {getFirestore/* , collection, addDoc, getDocs, getDoc ,doc ,updateDoc, deleteDoc */} from 'firebase/firestore'


// objeto de configuracion de firebase

const firebaseConfig = {
    apiKey: "AIzaSyBWbfAi1WM_one1qcNIMdbwGn_Chy3JBc4",
    authDomain: "crud-firebase-65b55.firebaseapp.com",
    projectId: "crud-firebase-65b55",
    storageBucket: "crud-firebase-65b55.appspot.com",
    messagingSenderId: "834711227651",
    appId: "1:834711227651:web:44a557b294327e59312d36"
  };
  
export const app = initializeApp(firebaseConfig)
 
 
export const db = getFirestore(app)



/* //data firestore

  // insertando datos en la BD
try {
  const nuevoUsuario = {nombre: 'flor', edad: 24}
  // aqui decimos que haga referencia una coleccion llamada users
  const docRef = collection(db, "users")
  // aqui le decimos que añada un documento a la referencia de la coleccion indicada y que agrege datos 
  const nuevoDoc = await addDoc(docRef, nuevoUsuario)

  console.log("Document written with ID: ", nuevoDoc.id);
} catch (e) {
  console.error("Error adding document: ", e);
}

// obteniendo datos de la BD y sus ids
// getdocs obtenosm los documentos de la coleccion especificada
const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  console.log(doc.data());
  console.log(doc.id);
});



// actualizando datos

  // doc crea una referencia a un documento especifico segun un id
  //recibe 3 parametros db: Es la instancia de la base de datos Firestore.
  //'users': Es el nombre de la colección a la que pertenece el documento.,
  //'jtuyYi1pTVb89SBiQgoi': Es el ID único del documento al que se está haciendo referenc

const docRef = doc(db, 'users', 'jtuyYi1pTVb89SBiQgoi')

try {
  await updateDoc(docRef, { edad: 1000})
  console.log('actualizado correctamente')
}catch(e){
  console.error('no se actualializo')
}


// eliminar datos
const deleteRef = doc(db, 'users', 'jtuyYi1pTVb89SBiQgoi');
try {
  await deleteDoc(deleteRef);
  console.log('Documento eliminado correctamente');
} catch (e) {
  console.error('Error al eliminar el documento:', e);
}

 */










