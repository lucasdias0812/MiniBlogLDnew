//import styles from "./Navbar.module.css";
import { Navlink } from "react-router-dom";

const Navbar = ()=>{
    return(
      <nav>
        <Navlink to="/">
            Mini <span>blog</span>
        </Navlink>     
        <ul>
            <li>
                <Navlink to="/">
                    Home
                </Navlink> 
            </li>
            <li>
                <Navlink to="/about">
                    Sobre
                </Navlink> 
            </li>
        </ul>
      </nav>
    );
}
export default Navbar;