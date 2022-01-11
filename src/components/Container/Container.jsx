import React from "react";
import logo from "../../_assets/img/logo.png"
import "./Container.css";

export const Container = props => {
    return(
        <div className="container">
            <div className="header">
                <div className="headerContent">
                    <div className="headerImgLogo">
                        <img className="imgLogo" src={logo} alt="" />
                    </div>
                    <div className="headerInputSearch">
                        <input className="inputSearch" type="text" placeholder="Procure por código, nome, marca..."></input>
                        <button className="buttonSearch">Pesquisar</button>
                    </div>
                    <div className="headerSignin">
                        botao de login
                    </div>
                    <div className="headerCart">
                        Botao de carrinho de compras
                    </div>
                </div>
                <div className="sidebar">
                    <nav className="navMenu">
                        <ul className="menu">
                            <li><a href="#">Smartphones</a></li>
                            <li><a href="#">Eletrodomesticos</a></li>
                            <li><a href="#">Eletronicos</a></li>
                            <li><a href="#">Casa</a></li>
                            <li><a href="#">Jardins</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="content">
                {props.children}
            </div>
        </div>
    );
}