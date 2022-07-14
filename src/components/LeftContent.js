import Posts from "./Posts";
import Stories from "./Stories";

export default function LeftContent() {
    return (
        <div class="esquerda">
            <Stories />

            <Posts />
        </div>
    )
}