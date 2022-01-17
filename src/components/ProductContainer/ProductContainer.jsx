import React from "react";
import "./ProductContainer.css";

export const ProductContainer = props => {
    return(
        <div className="productContainer">
           {props.children}
        </div>
    );
}