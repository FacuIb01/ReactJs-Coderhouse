import { Link } from "react-router-dom"

function Footer () {
    return(
        <footer id="footer">
            <div id="footerLink">
            <Link to={"/"}><a href="/" className="logo">OverPowerStore</a></Link>
            <p>OverPowerStore es tu E-commerce de productos de gimnasio de confianza, avalado por los gimnasios más reconocidos del pais.</p>
            </div>
            <div id="footerRedes">
                <h2 className="footerH2">Redes</h2>
                <a href="https://www.instagram.com/facku.ib/" rel="noreferrer" target="_blank" className="footerA">Instagram</a>
                <a href="https://github.com/FacuIb01" rel="noreferrer" target="_blank" className="footerA">Github</a>
            </div>
        </footer>
    )
}

export default Footer