import { Link } from "react-router-dom"

function Footer () {
    return(
        <footer id="footer">
            <div id="footerLink">
            <Link to={"/"}><a href="/" className="logo">OverPowerStore</a></Link>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nobis a voluptates! Unde expedita cupiditate obcaecati quod corporis voluptatibus debitis, ratione, quisquam corrupti facilis rem voluptates temporibus eligendi nobis veniam!</p>
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