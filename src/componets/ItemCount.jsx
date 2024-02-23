import { useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stock, onAdd}) => {
    const [counter, setCounter] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [itemAdded, setItemAdded] = useState(false);

    const incrementar = () => {
        if (counter < itemStock) {
            setCounter(counter + 1)
        }
    }

    const decrementar = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    }

    const addToCart = () => {
        if (counter <= itemStock) {
            setItemStock(itemStock - counter);
            setCounter(1);
            onAdd(counter)
            setItemAdded(true);
            console.log(`agregaste ${counter} productos al carrito!!!. QUEDAN ${itemStock - counter} productos disponibles`);
        }
    }

    return (
        <>
            <div className="row my-1 text-center">
                <div className="col">
                    <div className="btn-group btn-group-md" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-danger px-3" onClick={decrementar}>-</button>
                        <button type="button" className="btn btn-danger px-4">{counter}</button>
                        <button type="button" className="btn btn-danger px-3" onClick={incrementar}>+</button>
                    </div>
                </div>
            </div>
            <div className="row my-1 text-center">
                <div className="col">
                    <div className="btn-group btn-group-md" role="group" aria-label="Basic example">
                        {itemAdded ? <Link to={"/Cart"} className="btn btn-danger">Terminar Compra</Link>: <button type="button" className="btn btn-danger" onClick={addToCart}>Agregar al Carrito</button>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemCount;