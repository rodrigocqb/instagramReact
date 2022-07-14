export default function Sidebar() {
    return (
        <div class="sidebar">
            <div class="usuario">
                <img src="assets/img/catanacomics.svg" />
                <div class="texto">
                    <strong>catanacomics</strong>
                    Catana
                </div>
            </div>

            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                <Sugestao img="assets/img/bad.vibes.memes.svg" name="bad.vibes.memes" status="Segue você" />
                <Sugestao img="assets/img/chibirdart.svg" name="chibirdart" status="Segue você" />
                <Sugestao img="assets/img/razoesparaacreditar.svg" name="razoesparaacreditar" status="Novo no Instagram" />
                <Sugestao img="assets/img/adorable_animals.svg" name="adorable_animals" status="Segue você" />
                <Sugestao img="assets/img/smallcutecats.svg" name="smallcutecats" status="Segue você" />
                
            </div>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}

function Sugestao(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.img} />
                <div class="texto">
                    <div class="nome">{props.name}</div>
                    <div class="razao">{props.status}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}