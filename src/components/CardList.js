import React from "react";
import styled from "styled-components";
import CardComponent from "./CardComponent";

const BoxCard = styled.div`
min-height: 100vh;
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
flex-wrap: wrap
`;

const CardList = ({data}) => {
    return (
        <BoxCard>
            {data.map((card) => (
                <CardComponent
                    img={card.img}
                    title={card.title}
                    description={card.description}
                />
            ))}
        </BoxCard>
    );
};

export default CardList;