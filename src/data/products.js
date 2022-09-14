// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, doc, getDoc, query, where, collection, getDocs, Timestamp, addDoc, updateDoc } from "firebase/firestore/lite"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestoreDB = getFirestore(app);
export default firestoreDB;

// creo una referencia a la coleccion creada en firestore
const zapatillas = collection(firestoreDB, "eosShoes");


//funcion para obtener todos los productos de la coleccion
export async function getProductos() {    
  
  const shoesSnap = await getDocs(zapatillas);  
  
  return shoesSnap.docs.map(doc => {
    return {
      ...doc.data(),
      id: doc.id,
      key: doc.id,
  }
  });

}

//funcion para obtener productos según categoría
export async function getProductosByCategory(categoryName) {
  
  const queryShoes = query(zapatillas, where ("categoria", "==", categoryName));   
  const shoesSnap = await getDocs(queryShoes); 

  return shoesSnap.docs.map(doc => {
    return {
      ...doc.data(),
      id: doc.id,
      key: doc.id,
    }
  });

}

//funcion para obtener producto según ID
export async function getProducto(id) {   

  //obtengo la referencia de un solo elemento segun id
  const shoe = doc(zapatillas, id)    
  const shoeSnap = await getDoc(shoe);
    
  return {        
    ...shoeSnap.data(),
    id: shoeSnap.id      
  };    

}

//funcion para verificar stock
const verifyStock = async (order) => {  

    for (const el of order) {       
      const shoe = doc(zapatillas, el.id)           
      const snapShoe = await getDoc(shoe);      
      const cantidad = el.cant;

      //si la compra supera el stock se devuelve un mensaje
      if (cantidad > snapShoe.data().stock){
        return(`<p>UPPS...</p> <p>Tu compra no se pudo completar</p> <p>No hay sificientes Items del siguiente modelo:</p> <b>"${el.product_name}"</b>`)
      }   
  }
}

//funcion para actualizar stock
async function updateStock (orderProducts) {
  orderProducts.forEach(async el => {       
    
    const shoe = doc(zapatillas, el.id)   
    const snapShoe = await getDoc(shoe);
    const stockActual = snapShoe.data().stock;
    
    const cantidad = el.cant;
    const total = stockActual - cantidad;
    
    updateDoc(shoe, { stock: total });         
    
  });
}

//funcion para agregar doc a firestore
async function addDocument (document, coll) {
  //creo un TImestamp (objeto de fecha de firestore)
  const docDate = Timestamp.now()  
  const docDataWithDate = {...document, date: docDate} 
  
  const doc = collection(firestoreDB, coll);
  const docAdded = await addDoc (doc, docDataWithDate) 

  return(docAdded) 

}

//funcion para pasar orden de compra a firestore
async function createBuyOrder(orderData) {
  
  return (
    //se ejecuta la funcion, y del doc que resivo como return campturo el ID
    addDocument (orderData, "buyOrders").then(function(data) {return (`<p>MUCHAS GRACIAS POR TU COMPRA</p> <p>Te enviaremos un mail con los paso a seguir</p> tu orden de compra es: <b>${data.id}</b>`)}
    )
  )

}

//Funcion para Procesar la Ordende compra
export async function processOrder (orderProducts, orderData) { 

  return (
    verifyStock(orderProducts).then((data) => {       
      //si la respuesta está vacia, se ejecuta la funcion de actualizar stock, caso contrario devuelvo el mensaje
      if (!data) { 
        updateStock (orderProducts)
        return ( 
          createBuyOrder(orderData)
        )                            
      } else {         
        return data
      }  

    }) 
  )    
}

//funcion para enviar comentarios a firestore
export async function createCommentary(commentary) {

  return (    
    addDocument (commentary, "comments").then(function () {return (`<p>TU COMENTARIO HA SIDO ENVIADO</p>`)}
    )
  )
  
}

//Crear BD - se utilizó para crear la Base de Dato de forma masiva en firestore y no tener que cargar los elementos uno por uno - luego se borró la funcion de la aplicacion
export async function createDB(orderData) {    

  const orders = collection(firestoreDB, "eosShoes");  
  addDoc (orders, orderData) 

}



