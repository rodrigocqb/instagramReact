export default function Suggestions() {
    const Suggestions = [{ img: "assets/img/bad.vibes.memes.svg", name: "bad.vibes.memes", status: "Segue você" },
    { img: "assets/img/chibirdart.svg", name: "chibirdart", status: "Segue você" },
    { img: "assets/img/razoesparaacreditar.svg", name: "razoesparaacreditar", status: "Novo no Instagram" },
    { img: "assets/img/adorable_animals.svg", name: "adorable_animals", status: "Segue você" },
    { img: "assets/img/smallcutecats.svg", name: "smallcutecats", status: "Segue você" }];

    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {Suggestions.map((value) => (
                <Sugestao img={value.img} name={value.name} status={value.status} />
            ))}

        </div>
    )
}

function Sugestao(props) {
    return (
        <div className="sugestao">
            <div className="usuario">
                <img src={props.img} />
                <div className="texto">
                    <div className="nome">{props.name}</div>
                    <div className="razao">{props.status}</div>
                </div>
            </div>

            <div className="seguir">Seguir</div>
        </div>
    )
}