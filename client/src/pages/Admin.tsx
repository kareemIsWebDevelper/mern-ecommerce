import AdminNav from "../components/AdminNav";
import {Link, useNavigate} from "react-router-dom";
import product from "../assets/images/product.svg";
import category from "../assets/images/category.svg";
import order from "../assets/images/order.svg";
import user from "../assets/images/user.svg";
import {useState} from "react";

export default function Admin() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isHidden, setIsHidden] = useState(true);

    const handleLogin = (event) => {
        event.preventDefault();

        if (username === 'admin' && password === '7410') {
            localStorage.setItem('admin', String('admin'));
            setIsHidden(!isHidden);
        } else {
            alert("Invalid Credentials!");
        }
    };

    const handleSelect = (value) => {
        navigate(`/${value}`);
    };

  return (
    <div className={'mt-24'}>
        <AdminNav />
        {isHidden ? (
            <section>
                <form onSubmit={handleLogin}>
                    <legend className="text-center">Login As Admin</legend>
                    <input
                        type="text"
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        className="mb-4"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        className="mb-4"
                    />
                    <button
                        type="submit"
                        className="bg-black text-white p-2 bold w-1/4">
                        Login
                    </button>
                </form>
            </section>
        ) : (
            <div>
                <section>
                    <h1 className="gridCenter md:text-6xl">
                        Welcome To
                        <br className="md:hidden" />
                        &nbsp;Your Dashboard!
                    </h1>
                    <select
                        onChange={(e) => {handleSelect(e.target.value)}}
                        className={styles.select}
                    >
                        {options.map((option) => (
                            <option key={option.id} value={option.target}>
                                {option.text}
                            </option>
                        ))}
                    </select>
                </section>
                <section>
                    <div className="flexCenter flex-wrap gap-4">
                        {cards.map((card) => (
                            <div
                                key={card.id}
                                className={
                                    "bg-white shadow-xl w-56 h-auto gridCenter border rounded-lg p-2"
                                }
                            >
                                <h2>{card.title}</h2>
                                <img
                                    src={card.imgUrl}
                                    alt={"product"}
                                    className={
                                        "w-20 h-20 rounded-full shadow-sm gridCenter my-2 bg-slate-50"
                                    }
                                />
                                <Link
                                    to={card.link}
                                    className={
                                        "bg-white text-slate-400 font-bold shadow-2xl border py-1 px-2 rounded-xl"
                                    }
                                >
                                    Manage All
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        )}
    </div>
  );
}

const options = [
    {id: 1, target: "", text: "Select Route "},
    {id: 2, target: "admin/product", text: "View Products"},
    {id: 3, target: "admin/category", text: "View categories"},
    {id: 4, target: "admin/order", text: "View Orders"},
    {id: 5, target: "admin/user", text: "View Users"},
];

const cards = [
    {id: 1, title: "Products", quantity: "+1000", link: "product", imgUrl: product},
    {id: 2, title: "Categories", quantity: "+50", link: "category", imgUrl: category},
    {id: 3, title: "Orders", quantity: "+5M", link: "order", imgUrl: order},
    {id: 4, title: "Users", quantity: "+1M", link: "user", imgUrl: user},
]

const styles = {
    select: "w-56 md:mx-auto rounded-full h-16 text-2xl text-slate-400 font-bold text-center bg-white shadow-2xl flex my-4",
}
