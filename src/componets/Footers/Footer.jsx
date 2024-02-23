import Logo from "../Headers/Logo";
import SocialMedia from "./SocialMedia";

const Footer = () =>  {
    return(
        <div className="container-fluid bg-dark1 my-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <Logo />
                        <h4 className="fs-3 text-light">Subscribe to the Red Bull Shop newsletter and receive a <span className="text-danger">15% voucher</span></h4>
                    </div>
                    <div className="col"></div>
                    <div className="col-md-2">
                        <ul className="nav">
                            <li className="nav-item fs-5"><a className="nav-link text-light" href="#">Help & FAQs</a></li>
                            <li className="nav-item fs-5"><a className="nav-link text-light" href="#">Delivery & returns</a></li>
                            <li className="nav-item fs-5"><a className="nav-link text-light" href="#">Size charts</a></li>
                            <li className="nav-item fs-5"><a className="nav-link text-light" href="#">Gift cards</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <ul className="nav">
                            <li className="nav-item fs-5"><a className="nav-link text-light" href="#">Contact us</a></li>
                            <li className="nav-item fs-5"><a className="nav-link text-light" href="#">Store locations</a></li>
                            <li className="nav-item fs-5"><p className="nav-link text-light">Social media:</p></li>
                            <SocialMedia />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;