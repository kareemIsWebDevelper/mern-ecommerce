import {menu, close} from "../assets/index";
import { useNav } from "../hooks/useNav";
import CartCounter from "./cart/CartCounter";
import {SearchIcon} from "./SubComponents";

export default function AppNav() {
  const {Link, toggle, handleToggle, alterLink} = useNav();

  return (
    <header>
      <nav className="navbar">
        <div className="flexBetween w-full px-4">
            <img
              src={menu} alt="menu"
              className="w-10 h-10 cursor-pointer"
              onClick={handleToggle}
            />
           <div className="flexCenter gap-4">
                <SearchIcon />
               <CartCounter />
           </div>
        </div>
      </nav>
      <nav>
        {toggle && (
          <nav className="menu">
            <div className="menu-text">
              <div className="menu-header">
                <button onClick={handleToggle} className="logo">
                  <Link to="/">Brand</Link>
                </button>
                <img
                    src={close} alt="close"
                    onClick={handleToggle}
                    className="w-8 h-8 cursor-pointer"
                />
              </div>
              <div className="p-2 grid">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    className="nav-link"
                    onClick={() => {
                      handleToggle();
                      alterLink(link.target);
                    }}
                  >
                    {link.text}
                  </button>
                ))}
              </div>
            </div>
          </nav>
        )}
      </nav>
    </header>
  );
};

const navLinks = [
    { id: 1, target: "/", text: "Home" },
    { id: 2, target: "/admin", text: "Dashboard" },
    { id: 3, target: "/category?id=64acbda9476e323a10bc8a9d", text: "Electronics" },
    { id: 4, target: "/category?id=64ad8b2dc9feffb6950b9ec0", text: "Grocery" },
    { id: 5, target: "/category?id=64acc8b9a270321fbd322a71", text: "Personal Care" },
    { id: 6, target: "/category?id=64ad8cfce6f1f0caae01de26", text: "Clothes" },
];
