import { useEffect, useState } from "react";
//import arrayProductos from "../json/productos.json"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getFirestore, collection, addDoc, query, where, getDocs } from "firebase/firestore";
import Loading from "./Loading";

const ItemListContainer = ({greeting}) => {
    const [items, setItem ] = useState([])
    const [cargar, setCargar ] = useState(true)
    const {id} = useParams();
    
    /* useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");

        arrayProductos.forEach(producto => {
            addDoc(itemsCollection, producto);
        });

        console.log("Los productos se subieron correctamente!");
    }, []) */

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const consulta = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(consulta).then(resultado => {
            setCargar(false)
            setItem(resultado.docs.map(producto => ({id:producto.id, ...producto.data()})));
        });
    }, [id]);

    return(
        <>
            {cargar ? <Loading /> : <ItemList items={items}/>}
        </>
    )
}

export default ItemListContainer;