import { useContext } from "react";
import iconCart from "../assets/carritoICON.svg"
import { CardContext } from "./context/CardContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const {cantTotalProductos} = useContext(CardContext)

    return(
        <>
            {cantTotalProductos() > 0 ? 
            <Link to={"/cart"} className="btn btn-primary position-relative">
                <img src={iconCart} alt="" width={24} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cantTotalProductos()}</span>
            </Link> : <Link to={"/cart"} className="btn btn-primary position-relative">
                <img src={iconCart} alt="" width={24} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"></span>
            </Link> }
        </>
    )
}

export default CartWidget;