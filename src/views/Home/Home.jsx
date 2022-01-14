import React from "react";
import { Container } from "../../components/Container";
import { CardProduct } from "../../components/CardProduct";
import iphoneX from "../../_assets/img/iphoneX.png"
import "./Home.css";

export const Home = _ => {
    return(
        <div className="pageHome">
            <Container>
                <CardProduct img={iphoneX} description="Iphone X 256gb" price="R$ 2.500,00"/>
                <CardProduct img={iphoneX} description="Iphone X 256gb" price="R$ 2.500,00"/>
                <CardProduct img={iphoneX} description="Iphone X 256gb" price="R$ 2.500,00"/>
                <CardProduct img={iphoneX} description="Iphone X 256gb" price="R$ 2.500,00"/>
                <CardProduct img={iphoneX} description="Iphone X 256gb" price="R$ 2.500,00"/>
                <CardProduct img={iphoneX} description="Iphone X 256gb" price="R$ 2.500,00"/>
                <CardProduct img={iphoneX} description="Iphone X 256gb" price="R$ 2.500,00"/>
                <CardProduct img={iphoneX} description="Iphone X 256gb" price="R$ 2.500,00"/>
                <CardProduct img={iphoneX} description="Iphone X 256gb" price="R$ 2.500,00"/>
                <CardProduct img={iphoneX} description="Iphone X 256gb" price="R$ 2.500,00"/>
                <CardProduct img={iphoneX} description="Iphone X 256gb" price="R$ 2.500,00"/>
                <CardProduct img={iphoneX} description="Iphone X 256gb" price="R$ 2.500,00"/>
                <CardProduct img={iphoneX} description="Iphone X 256gb" price="R$ 2.500,00"/>
                <CardProduct img={iphoneX} description="Iphone X 256gb" price="R$ 2.500,00"/>
                <CardProduct img={iphoneX} description="Iphone X 256gb" price="R$ 2.500,00"/>
                <CardProduct img={iphoneX} description="Iphone X 256gb" price="R$ 2.500,00"/>
                <CardProduct img={iphoneX} description="Iphone X 256gb" price="R$ 2.500,00"/>
                <CardProduct img={iphoneX} description="Iphone X 256gb" price="R$ 2.500,00"/>
                <CardProduct img={iphoneX} description="Iphone X 256gb" price="R$ 2.500,00"/>
                <CardProduct img={iphoneX} description="Iphone X 256gb" price="R$ 2.500,00"/>
            </Container>
        </div>
        
    );
}