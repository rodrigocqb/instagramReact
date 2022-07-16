export default function Username() {
    return (
        <User img="assets/img/catanacomics.svg" username="catanacomics" name="Catana" />
    )
}

function User(props) {
    return (
        <div className="usuario">
            <img src={props.img} />
            <div className="texto">
                <strong>{props.username}</strong>
                {props.name}
            </div>
        </div>
    )
}