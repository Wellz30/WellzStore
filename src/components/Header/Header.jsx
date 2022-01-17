import React from "react";
import "./Header.css";
import logo from "../../_assets/img/logo.png";

export const Header = props => {
    return(
        <div className="header">
            <div className="contentHeader">
                <div className="logo">
                    <img className="logo-img" src={logo} alt="Logo" />
                </div>
                <div className="secondContentHeader">
                    <div className="buttonsHeader">
                        <button className="buttonLogin">Login</button>
                        <button className="buttonCart">Carrinho</button>
                    </div>
                    <div className="searchHeader">
                        <input className="inputSearch"></input>
                        <button className="buttonSearch">Pesquisar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}