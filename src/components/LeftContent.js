import Posts from "./Posts";
import Stories from "./Stories";

export default function LeftContent() {
    return (
        <div className="esquerda">
            <Stories />

            <Posts />
        </div>
    )
}