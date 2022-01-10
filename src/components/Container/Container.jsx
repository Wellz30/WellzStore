import React from "react";
import "./Container.css";

export const Container = props => {
    return(
        <div className="container">
            <div className="header">
                <div className="headerContent">
                    <div className="headerImgLogo">
                        Logo
                    </div>
                    <div className="headerTitle">
                        Nome da loja
                    </div>
                    <div className="headerInputSearch">
                        campo de busca
                    </div>
                    <div className="headerSignin">
                        botao de login
                    </div>
                    <div className="headerCart">
                        Botao de carrinho de compras
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="sidebar">
                    Sidebar
                </div>
                {props.children}
            </div>
        </div>
    );
}