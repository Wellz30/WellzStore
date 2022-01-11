import React from "react";
import "./CardProduct.css";

export const CardProduct = props =>{
    return(
        <div className="Card">
            <div className="imgCard">
                <img className="img" src={props.img} alt="" />
            </div>
            <div className="descriptionCard">
                {props.description}
            </div>
            <div className="priceCard">
                {props.price}
            </div>
        </div>
    );
}