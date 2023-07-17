import {search} from "../assets/index";
import {Link} from "react-router-dom";
import {useState} from "react";


export const SearchIcon = () => {
    return (
      <div className="mt-1">
          <button>
              <Link to={'/search'}>
                  <img src={search} alt="search" className="w-7 h-7" />
              </Link>
          </button>
      </div>
    );
};