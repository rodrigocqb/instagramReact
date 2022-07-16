import IconsDesktop from "./IconsDesktop";
import LogosDesktop from "./LogosDesktop";

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="container">
                <LogosDesktop />

                <div className="logo-mobile">
                    <ion-icon name="logo-instagram"></ion-icon>
                </div>

                <div className="instagram-mobile">
                    <img src="assets/img/logo.png" />
                </div>

                <div className="pesquisa">
                    <input type="text" placeholder="Pesquisar" />
                </div>

                <IconsDesktop />

                <div className="icones-mobile">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
            </div>
        </div>
    )
}