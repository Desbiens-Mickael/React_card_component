import React from "react";
import styled from "styled-components";

const Card = styled.div`
    height: 400px;
    width: 300px;
    background: #282c34;
    border-radius: 27% 11% 10px 10px;
    box-shadow: 8px 8px 10px #8C8C8C;
    padding: 0 0 .5rem 0;
    margin: 1rem 0
`;

const CardImg = styled.div`
    width: 100%;
    height: 60%;
    background: #ECE9E9;
    border-radius: 25% 10%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CardBody = styled.div`
    width: 100%;
    height: 40%;
    color: white;
`;

const Img = styled.img`
    width: 90%;
    height: 90%;
    filter: drop-shadow(0 0 .7rem #BABABA);
`;

const TitleCard = styled.h3`
    text-align: center;
    margin: .5rem auto .8rem auto;
`;

const Description = styled.p`
    margin: auto .5rem;
    text-align: left;
`;

const CardComponent = (props) => {
    return(
        <Card>
            <a href="#">
                <CardImg>
                    <Img src={props.img}></Img>
                </CardImg>
                <CardBody>
                    <TitleCard>{props.title}</TitleCard>
                    <Description>{props.description}</Description>
                </CardBody>
            </a>
        </Card>
    );
};

export default CardComponent;