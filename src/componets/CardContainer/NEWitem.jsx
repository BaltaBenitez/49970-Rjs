import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getFirestore, collection, query, where, getDocs, limit } from "firebase/firestore";
import Loading from "../Loading";

const NEWitem = () => {
    const [items, setItem] = useState([]);
    const [cargar, setCargar] = useState(true);
    const { id } = useParams();

    const scrollToTop = () => {
        window.scrollTo({
            top: -1,
            //behavior: "smooth"
        });
    };

    /* useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const consulta = query(itemsCollection, where("new", "==", true), limit(4)); // Cambio de "===" a "=="
        getDocs(consulta).then(resultado => {
            setCargar(false);
            setItem(resultado.docs.map(producto => ({ id: producto.id, ...producto.data() })));
        });
    }, [id]); */
    useEffect(() => {
        const fetchData = async () => {
            try {
                const db = getFirestore();
                const itemsCollection = collection(db, "items");
                const consulta = query(itemsCollection, where("new", "==", true), limit(4)); // Limitar a 4 resultados
                const snapshot = await getDocs(consulta);
                const nuevosItems = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setItem(nuevosItems);
                setCargar(false);
            } catch (error) {
                console.error("Error al obtener los datos:", error);
            }
        };

        fetchData();
    }, [id]);

    return (
        <div className="container my-5">
            {cargar ? <Loading /> : <div className="row">
                {items.map(it => (
                    <div key={it.id} className="col-md-3">
                        <div className="card border-dark">
                            <Link className="text-dark text-decoration-none" to={"/item/" + it.id}>
                                <img src={it.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="bg-danger rounded text-white text-center">NUEVO</h5>
                                    <h5 className="card-text">{it.title}</h5>
                                    <h5 className="card-text text-center"><b>$ {it.price}</b></h5>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div> }
            <div className="row text-center my-5">
                <h3 className="col-12 bg-primary">
                    <Link className="nav-link text-light fs-5" to={"/contenido"} onClick={scrollToTop}>MÁS PRODUCTOS</Link>
                </h3>
            </div>
        </div>
    );
}

export default NEWitem;
