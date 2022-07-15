import React from "react";
import { Link } from "react-router-dom";

export default function Navigation(props) {
  return (
    <div>
      <nav className="main-nav">
        <ul>
          <li>
            <Link to="/Cats" onClick={() => props.handleSearch("Cats")}>Cats</Link>
          </li>
          <li>
            <Link to="/Dogs" onClick={() => props.handleSearch("Dogs")}>Dogs</Link>
          </li>
          <li>
            <Link to="/Pokemons" onClick={() => props.handleSearch("Pokemons")}>Pokemons</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
