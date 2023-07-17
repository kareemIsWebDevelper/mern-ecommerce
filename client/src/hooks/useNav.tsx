import {Link, useNavigate} from "react-router-dom";
import { useState } from "react";
import menu from "../assets/images/menu.svg";
import close from "../assets/images/close.svg";
import cart from "../assets/images/cart.svg";

export const useNav = () => {
    const [toggle, setToggle] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleToggle = () => {
        setToggle(!toggle);
    }

    const alterLink = (link) => {
        navigate(`${link}`, {replace: true});
    }

    return { menu, close, cart, Link, navigate, useState, toggle, handleToggle, alterLink}
};


