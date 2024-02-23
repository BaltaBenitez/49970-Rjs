import Logo from "./Logo";
import NavBar from "./NavBar";

const Header = () => {
    return (
        <div className="bg-dark1">
            <div className="container mb-4 p-3">
                <div className="row">
                    <div className="col-md-2">
                        <Logo/>
                    </div>
                    <div className="col-md-10">
                        <NavBar />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;