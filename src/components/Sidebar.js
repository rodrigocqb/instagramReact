import Suggestions from "./Suggestions";
import Username from "./Username";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <Username />

            <Suggestions />

            <div className="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div className="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}

