import { useContext } from "react";
import ItemCount from "./ItemCount";
import { CardContext } from "./context/CardContext";

const ItemDetail = ({item}) => {
    const {addItem} = useContext(CardContext);
    const onAdd = (quantity) => {
        addItem(item, quantity);
    }

    return(
        <div className="container border-bottom border-dark border-3">
            <div className="row g-o">
                <div className="col-md-4">
                    <img src={item.image} alt={item.title} className="img-fluid rounded-start"/>
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <h4 className="card-title m-5"><b>{item.title}</b></h4>
                        <div className="text-star mx-5">{item.new === true ? <p className="card-text btn btn-danger px-5">NUEVO</p> : null}</div>
                        <p className="card-text text-dark m-5">{item.description}</p>
                        <p className="card-text text-center fs-3">${item.price}</p>
                        <div className="container">
                            <ItemCount stock={20} onAdd={onAdd} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;