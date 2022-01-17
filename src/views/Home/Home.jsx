import React from "react";
import { Container } from "../../components/Container";
import { CardProduct } from "../../components/CardProduct";
import iphoneX from "../../_assets/img/iphoneX.png"
import "./Home.css";
import { ProductContainer } from "../../components/ProductContainer/ProductContainer";
import { Header } from "../../components/Header";

export const Home = _ => {
    return(
        <div className="pageHome">
            <Container>
                <Header></Header>
                <ProductContainer>
                    <CardProduct img={iphoneX} description="Iphone X" price="R$ 2.500,00"/>
                    <CardProduct img={iphoneX} description="Iphone X" price="R$ 2.500,00"/>
                    <CardProduct img={iphoneX} description="Iphone X" price="R$ 2.500,00"/>
                    <CardProduct img={iphoneX} description="Iphone X" price="R$ 2.500,00"/>
                    <CardProduct img={iphoneX} description="Iphone X" price="R$ 2.500,00"/>
                    <CardProduct img={iphoneX} description="Iphone X" price="R$ 2.500,00"/>
                    <CardProduct img={iphoneX} description="Iphone X" price="R$ 2.500,00"/>
                    <CardProduct img={iphoneX} description="Iphone X" price="R$ 2.500,00"/>
                    <CardProduct img={iphoneX} description="Iphone X" price="R$ 2.500,00"/>
                </ProductContainer>
            </Container>
        </div>
        
    );
}