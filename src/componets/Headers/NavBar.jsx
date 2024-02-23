import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget";

const NavBar = () => {
    return(
        <>
            <div className="row">
                <ul className="nav">
                    <li className="nav-item">
                        <NavLink className="nav-link text-light fs-5" to={"/contenido"}>DE TODO</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-light fs-5" to={"/category/ropa"}>ROPA</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-light fs-5" to={"/category/figuras"}>FIGURAS</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-light fs-5" to={"/category/accesorios"}>ACCESORIOS</NavLink>
                    </li>
                    <li className="nav-item">
                        <p className="nav-link text-dark fs-5"><CartWidget /></p>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default NavBar;