import IconsDesktop from "./IconsDesktop";
import LogosDesktop from "./LogosDesktop";

export default function Navbar() {
    return (
        <div class="navbar">
            <div class="container">
                <LogosDesktop />

                <div class="logo-mobile">
                    <ion-icon name="logo-instagram"></ion-icon>
                </div>

                <div class="instagram-mobile">
                    <img src="assets/img/logo.png" />
                </div>

                <div class="pesquisa">
                    <input type="text" placeholder="Pesquisar" />
                </div>

                <IconsDesktop />

                <div class="icones-mobile">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
            </div>
        </div>
    )
}