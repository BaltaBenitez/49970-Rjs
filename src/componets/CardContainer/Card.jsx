import arrayIMG from "../../json/contenidocards.json"
import { useEffect, useState } from "react";

const Card = () => {
    const [contenidos, setContenido] = useState([])
    
    useEffect(() => {
        setContenido(arrayIMG)
    })

    return(
        <div className="container">
            <div className="row border-bottom border-primary p-3 thick-border">
                {contenidos.map(cont => (
                    <div key={cont.id} className="col">
                        <img src={cont.imgUrl} className="img-fluid" alt={cont.imgAlt}/>
                        <p className="text-center text-black my-2">{cont.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Card;