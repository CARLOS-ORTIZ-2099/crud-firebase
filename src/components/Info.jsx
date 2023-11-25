
import { useEffect, useState } from 'react'
import {db} from '../firebase/firebase'
import {collection, addDoc, getDocs, getDoc ,doc ,updateDoc, deleteDoc} from 'firebase/firestore'
import { Charging } from './Charging'


const initial = {product:'', description:'', price:''}
export const Info = () => {
    const [datos, setDatos] = useState(initial)
    const [products, setProducts] = useState(null)
    const [edit, setEdit] = useState(null)

    // cargar u obtener datos de firestore
    const chargeProducts = async () => {
        try{
            const productsCol = collection(db, 'products')
            const querySnapshot = await getDocs(productsCol)
            const productsList = []
            querySnapshot.forEach((product) => productsList.push({id : product.id, ...product.data()}))
            setProducts(productsList)
            console.log(products)
        }catch(error){
            console.error(error)
        }
    }

    const changeFields = (e) => {
        setDatos({...datos, [e.target.name]: e.target.value})
    }
    // crear datos en firestore
    const handleOnSubmit = async (e) => {
        e.preventDefault()
        if(!datos.product || !datos.description || !datos.price){
            console.error('todos los campos son obligatorios')
            return
        }
        try{
            const sendData = collection(db, 'products')
            const nuevoDoc = await addDoc(sendData, {...datos})
            console.log('producto añadido')
            chargeProducts()
        }catch(e){
            console.error('no se creo la data')
        }
        e.target.reset()
        setDatos(initial)
    }

    // eliminar datos de firestore
    const deleteProduct = async (id) => {
         
        try {
            const deleteRef = doc(db, 'products',id)
            await deleteDoc(deleteRef);
            console.log('Documento eliminado correctamente');
            chargeProducts()
          } catch (e) {
            console.error('Error al eliminar el documento:', e);
          }  
    }
    // editar datos de firestore
    const editproduct =  (id) => setEdit(id)

    const saveChange = async(id, e) => {
        e.preventDefault()
        setEdit(null)
        let product= e.target.product.value
        let price = e.target.price.value
        let description = e.target.description.value
        // referenciamos al documento a editar
        try{  
            let editRef = doc(db, 'products', id)
            let response = await updateDoc(editRef, {product, price, description})
            chargeProducts()
    
        }catch(er){
            console.error(er)
        }
    }


    useEffect(() => {
        chargeProducts()
    }, [])

if(products == null){
    return <Charging/>
}
  return (
    <section>
            <h1>agrega productos</h1>
            <form onSubmit={handleOnSubmit} action="">
                <label htmlFor="product">producto</label>
                <input onChange={changeFields} type="text" id='product' name='product' />

                <label htmlFor="price">price</label>
                <input onChange={changeFields} type="text" id='price' name='price' />

                <label htmlFor="description">description</label>
                <textarea onChange={changeFields} name="description" id="description" cols="10" rows="3"></textarea>

               <input type="submit" value='enviar' />
            </form>
                {
                    products.length < 1? <span>sin datos aun</span>:
                    products?.map((product) => (
                        <div key={product?.id}>
                            {
                                edit == product.id ?
                                <form onSubmit={(e) => saveChange(product.id,e)}>
                                    <input  name='product' type="text" placeholder='cambiar dato' defaultValue={product.product}/>
                                    <input  name='price' type="text" placeholder='cambiar dato' defaultValue={product.price}/>
                                    <textarea name="description" defaultValue={product.description}  id="" cols="30" rows="10"></textarea>
                                    <button >guardar</button>
                                </form>:
                                <>
                                <h2>{product?.product}</h2>
                                <h2>{product?.price}</h2>
                                <h2>{product?.description}</h2>
                                <button onClick={() => deleteProduct(product.id)}>eliminar</button>
                                <button onClick={(e) => editproduct(product.id,e)}>editar</button>
                                </>
                            }
                        </div>
                    ))
                }
    </section>
  )
}
