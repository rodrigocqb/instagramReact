import Suggestions from "./Suggestions";
import Username from "./Username";

export default function Sidebar() {
    return (
        <div class="sidebar">
            <Username />

            <Suggestions />

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}

