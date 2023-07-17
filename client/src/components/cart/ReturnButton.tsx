import { Link } from "react-router-dom"

export const ReturnButton = () => {
    return (
        <button className="teal bold mt-8 text-white">
            <Link to="/" className="bgTeal shadow-xl p-4 rounded-3xl">
                Start Shopping
            </Link>
        </button>
    )
}