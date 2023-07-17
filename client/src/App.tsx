import { Route, Routes } from "react-router-dom";
import {
  Admin,
  AllProducts,
  Cart,
  Categories,
  Home,
  NotFound,
  Products,
} from "./app.modules";
import {Search} from "./pages/Search";
import { Details } from "./pages/Details";

export default function App() {
  return (
    <div className="App">
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.id}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Routes>
    </div>
  );
}

const routes = [
  { id: 1, path: "*", component: NotFound },
  { id: 2, path: "/", component: Home },
  { id: 3, path: "/admin", component: Admin },
  { id: 4, path: "/admin/product", component: Products },
  { id: 5, path: "/admin/category", component: Categories },
  { id: 6, path: "/category", component: AllProducts },
  { id: 7, path: "/cart", component: Cart },
  { id: 8, path: "/search", component: Search },
  { id: 9, path: "/product/:id", component: Details }
];
