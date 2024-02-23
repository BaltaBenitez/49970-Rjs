import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
        <div className="col-md-3 text-center">
            <div className="card border-dark border-1">
                <Link className="text-dark text-decoration-none"to={"/item/" + item.id} >
                    <img src={item.image} className="card-img-top" alt={item.title} />
                    <div className="card-body">
                        {item.new === true ? <h5 className="bg-danger rounded text-white text-center">NUEVO</h5> : null}
                        <h5 className="card-text">{item.title}</h5>
                        <h5><b>$ {item.price}</b></h5>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Item;