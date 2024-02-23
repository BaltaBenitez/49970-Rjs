const Loading = () => {
    return(
        <div className="container my-5">
            <div className="row">
                <div className="col text-center">
                    <div className="spinner-grow text-warning m-2" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-warning m-2" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-warning m-2" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading;