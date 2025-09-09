import Logo from "./Logo"
import Routing from "./Routing";
import Slogan from "./Slogan"
import "/src/css/navbar.css";

export default function Navbar(){
    return (
    <>
    <nav className="nav">
        <Logo />
        <Slogan />
        <Routing />
    </nav>
    </>
    )
}