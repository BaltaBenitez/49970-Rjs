import { useEffect, useState } from "react";
import arrayProductos from "../json/productos.json"
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import Loading from "./Loading";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const [cargar, setCargar ] = useState(true)
    const {id} = useParams();

    useEffect(() => {
        const db = getFirestore();
        const producto = doc(db, "items", id);
        getDoc(producto).then(resultado => {
            setCargar(false);
            setItem({id:resultado.id, ...resultado.data()});
        });
    }, [id]);

    return(
        <>
            {cargar ? <Loading /> : <ItemDetail item={item}/>}
        </>
    )
}

export default ItemDetailContainer;