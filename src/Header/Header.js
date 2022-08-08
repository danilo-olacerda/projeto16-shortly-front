import styled from "styled-components";

export default function Header() {

    return (
        <Container>
            <div>
            </div>
            <div>
                <p>Entrar</p>
                <h3>Registrar</h3>
            </div>
        </Container>
    )
}

const Container = styled.div`
    height: 60px;
    background-color: #FFFFFF;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 50px;
    p {
        margin-right: 5px;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: #5D9040;
    }
    h3 {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: #9C9C9C;
    }
    div {
        display: flex;
    }
`;