import styled from "styled-components";
import logo from "../assets/logo.png";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Ranking (){

    const [ranking, setRanking] = useState([]);

    useEffect(() => {

        const promise = axios.get("https://danilo-shortly.herokuapp.com/ranking");

        promise.then(response => {
            setRanking(response.data);
        });
        
    },[]);

    return (
        <Container>
            <Logo>
                <h2>Shortly</h2>
                <img src={logo} alt="" />
            </Logo>
            <RankingContainer>🏆 Ranking</RankingContainer>
            <RankingItems>
                {ranking.map((item, index) => <h3>{index + 1}. {item.name} - {item.linksCount} links - {item.visitCount} visualizações</h3>)}
            </RankingItems>
            <p>Crie sua conta para usar nosso serviço!</p>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    p {
        font-weight: 700;
        font-size: 36px;
        line-height: 45px;
        color: #000000;
    }
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    h2 {
        font-weight: 200;
        font-size: 64px;
        line-height: 80px;
        color: #000000
    }
`;

const RankingContainer = styled.div`
    margin-top: 50px;
    font-weight: 700;
    font-size: 36px;
    line-height: 45px;
    color: #000000;
`;

const RankingItems = styled.div`
    overflow-y: scroll;
    padding: 20px;
    margin-top: 60px;
    background: #FFFFFF;
    border: 1px solid rgba(120, 177, 89, 0.25);
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 24px 24px 0px 0px;
    width: calc(100% - 100px);
    height: 250px;
    h3 {
        font-weight: 500;
        font-size: 22px;
        line-height: 28px;
        color: #000000;
    }
`;