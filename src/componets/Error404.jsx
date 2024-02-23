const Error404  = () => {
    return(
        <div className="container my-5">
            <div className="row">
                <div className="col text-center">
                    <h1 className="display-1"><i className="bi bi-x-octagon-fill text-danger"></i></h1>
                    <h1 className="display-3">Error 404 <i className="bi bi-x-octagon-fill text-danger"></i></h1>
                    <h3 className="display-4">La página no existe!!</h3>
                </div>
            </div>
        </div>
    )
}

export default Error404;