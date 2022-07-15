export default function Username() {
    return (
        <User img="assets/img/catanacomics.svg" username="catanacomics" name="Catana" />
    )
}

function User(props) {
    return (
        <div class="usuario">
            <img src={props.img} />
            <div class="texto">
                <strong>{props.username}</strong>
                {props.name}
            </div>
        </div>
    )
}