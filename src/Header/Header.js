import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../contexts/UserContext.js";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Header() {

    const navigate = useNavigate();
    const { setToken, token } = useContext(UserContext);
    const [user, setUser] = useState([]);

    useEffect(()=> {

        if (!token) return;
        const config = {
            headers: {
                Authorization: `${token}`
            }
        }

        const promise = axios.get("https://danilo-shortly.herokuapp.com/users/me", config);

        promise.then((res)=> {
            setUser(res.data);
        })
        .catch((e)=>{
            setToken(null);
            navigate("/");
        });

    }, [token]);

    function logOut(){
        const confirmation = window.confirm("Deseja realmente sair?");
        if (!confirmation) return;
        setToken(null);
        navigate("/");
    }

    return (
        <Container>
            {!token ? 
            <div>
            </div>
            :
            <span>
                Seja bem-vindo(a), {user.name}!
            </span>}
            {!token ? 
            <div>
                <p onClick={()=> navigate("/signin")}>Entrar</p>
                <h3 onClick={()=> navigate("/signup")}>Registrar</h3>
            </div> 
            :
            <div>
                <h3 onClick={()=> navigate("/home")}>
                    Home
                </h3>
                <h3 onClick={()=> navigate("/")}>
                    Ranking
                </h3>
                <h3 onClick={logOut}>
                    Sair
                </h3>
            </div>}
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
    padding: 0 50px;
    p {
        margin-right: 5px;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: #5D9040;
        cursor: pointer;
    }
    h3 {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: #9C9C9C;
        cursor: pointer;
        margin-right: 10px;
    }
    div {
        display: flex;
    }
    span {
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: #5D9040;
    }
`;