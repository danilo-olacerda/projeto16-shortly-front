import styled from "styled-components";
import logo from "../assets/logo.png";

export default function Ranking (){
    return (
        <Container>
            <Logo>
                <h2>Shortly</h2>
                <img src={logo} alt="" />
            </Logo>
            <RankingContainer>🏆 Ranking</RankingContainer>
            <RankingItems>

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
    margin-top: 75px;
    font-weight: 700;
    font-size: 36px;
    line-height: 45px;
    color: #000000;
`;

const RankingItems = styled.div`
    padding: 20px;
    margin-top: 60px;
    background: #FFFFFF;
    border: 1px solid rgba(120, 177, 89, 0.25);
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 24px 24px 0px 0px;
    width: calc(100% - 100px);
    height: 250px;
`;