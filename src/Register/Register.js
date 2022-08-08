import styled from "styled-components";
import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import logo from "../assets/logo.png";
import axios from "axios";
import { ThreeDots } from  'react-loader-spinner';

export default function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [enable, setEnable] = useState(false);

    const navigate = useNavigate();

    function register(e){
        e.preventDefault();
        const body = {
            name,
            email,
            password,
            confirmPassword: passwordConfirmation
        };

        if (password !== passwordConfirmation){
            return alert("As senhas não conferem!");
        }

        const promise = axios.post("https://danilo-shortly.herokuapp.com/signup", body);
        setEnable(true);

        promise
            .then(()=> {
            navigate("/");
        })
            .catch((info)=> {
                setEnable(false);
                alert(info.response.data.message);
            })
    }

    return (
        <Container>
            <Logo>
                <h2>Shortly</h2>
                <img src={logo} alt="" />
            </Logo>
            <form action="submit" onSubmit={register}>
                <input type="text" disabled={enable} placeholder="Nome" value={name} onChange={e => setName(e.target.value)} required/>
                <input type="email" disabled={enable} placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} required/>
                <input type="password" disabled={enable} placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} required/>
                <input type="password" disabled={enable} placeholder="Confirmar senha" value={passwordConfirmation} onChange={e => setPasswordConfirmation(e.target.value)} required/>
                <button type="submit" disabled={enable}>{enable ? <ThreeDots color="#FFFFFF" height={20} width={50} /> : "Criar Conta"}</button>
            </form>       
        </Container>
    )
}

const Container = styled.div`
	width: 100%;
	height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    form {
        margin-top: 50px;
        width: 80%;
        display: flex;
        flex-direction: column;
        margin-bottom: 25px;
        align-items: center;
        width: calc(100% - 100px);
    }
    input {
        height: 60px;
        padding: 9px 11px;
        margin-bottom: 6px;
        background: #FFFFFF;
        border: 1px solid rgba(120, 177, 89, 0.25);
        box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
        border-radius: 12px;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: #9C9C9C;
        width: 100%;
    }
    input::placeholder {
        color: #DBDBDB;
    }
    button {
        margin-top: 60px;
        padding: 8px 0;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        background: #5D9040;
        border-radius: 12px;
        height: 60px;
        width: 15%;
        font-weight: 700;
        font-size: 14px;
        line-height: 18px;
        color: #FFFFFF;
    }
    p {
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
        color: #52B6FF;
    }
    button:disabled {
        opacity: 0.7;
    }
    input:disabled {
        color: #AFAFAF;
        background: #F2F2F2;
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