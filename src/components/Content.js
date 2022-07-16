import LeftContent from "./LeftContent"
import Sidebar from "./Sidebar"

export default function Content() {
    return (
        <div className="corpo">
            <LeftContent />
            
            <Sidebar />
        </div>
    )
}