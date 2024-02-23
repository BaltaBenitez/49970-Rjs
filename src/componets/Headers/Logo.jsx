import { Link } from "react-router-dom";
import LogoRB from "../../assets/nav_redbullcom-logo.png"

const Logo = () => {
    return  (
        <>
            <Link to={"/"}>
                <img src={LogoRB} alt="Red Bull logo" width={120} />
            </Link>
        </>
    )
}

export default Logo;