import { useNav } from "../hooks/useNav";
import { Link } from "react-router-dom";

export default function AdminNav() {
  const { menu, close, Link
    , toggle, handleToggle, alterLink } = useNav();

  return (
    <header>
      <nav className="navbar">
        <div className="flexBetween w-full px-4">
          <Link to="/" className="flexCenter gap-2">
            <h1 className="bold text-2xl">Brand</h1> | <h2>Home</h2>
          </Link>
        </div>
      </nav>
      {toggle && (
        <nav className="menu">
          <div className="menu-text">
            <div className="menu-header">
              <button onClick={handleToggle} className="logo">
                <Link to="/">Brand</Link>
              </button>
              <img
                src={close}
                alt="close"
                onClick={handleToggle}
                className="w-8 h-8"
              />
            </div>
            <div className="p-2 grid">
              {adminLinks.map((link) => (
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
    </header>
  );
}

const adminLinks = [
  { id: 1, target: "/", text: "Home" },
  { id: 2, target: "/admin/user", text: "Users" },
  { id: 3, target: "/admin/category", text: "Categories" },
  { id: 4, target: "/admin/product", text: "Products" },
  { id: 5, target: "/admin/order", text: "Orders" },
];
