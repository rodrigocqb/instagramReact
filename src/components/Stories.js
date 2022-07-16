export default function Stories() {
    const Stories = [{ img: "assets/img/9gag.svg", name: "9gag" },
    { img: "assets/img/meowed.svg", name: "meowed" },
    { img: "assets/img/barked.svg", name: "barked" },
    { img: "assets/img/nathanwpylestrangeplanet.svg", name: "nathanwpylestrangeplanet" },
    { img: "assets/img/wawawicomics.svg", name: "wawawicomics" },
    { img: "assets/img/respondeai.svg", name: "respondeai" },
    { img: "assets/img/filomoderna.svg", name: "filomoderna" },
    { img: "assets/img/memeriagourmet.svg", name: "memeriagourmet" }];

    return (
        <div className="stories">

            {Stories.map((value) => (
                <Story img={value.img} name={value.name} />
            ))}

            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}

function Story(props) {
    return (
        <div className="story">
            <div className="imagem">
                <img src={props.img} />
            </div>
            <div className="usuario">
                {props.name}
            </div>
        </div>
    )
}