import React from "react";

export default function Posts() {
    const Posts = [{
        userImg: "assets/img/meowed.svg", username: "meowed", postImg: "assets/img/gato-telefone.svg",
        likeImg: "assets/img/respondeai.svg", likeUser: "respondeai", likeNumber: "101.523"
    }, {
        userImg: "assets/img/barked.svg", username: "barked", postImg: "assets/img/dog.svg",
        likeImg: "assets/img/adorable_animals.svg", likeUser: "adorable_animals", likeNumber: "99.159"
    }];

    return (
        <div className="posts">
            {Posts.map((value) => (
                <Post userImg={value.userImg} username={value.username} postImg={value.postImg}
                    likeImg={value.likeImg} likeUser={value.likeUser} likeNumber={value.likeNumber} />
            ))}
        </div>
    )
}

function Post(props) {
    const [heart, setHeart] = React.useState("heart-outline");

    return (
        <div className="post">
            <div className="topo">
                <div className="usuario">
                    <img src={props.userImg} />
                    {props.username}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo" onClick={() => { if (heart === "heart-outline") { setHeart("heart") } }}>
                <img src={props.postImg} />
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon name={heart} onClick={() => { heart === "heart-outline" ? setHeart("heart") : setHeart("heart-outline") }} ></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={props.likeImg} />
                    <div className="texto">
                        Curtido por <strong>{props.likeUser}</strong> e <strong>outras {props.likeNumber} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}