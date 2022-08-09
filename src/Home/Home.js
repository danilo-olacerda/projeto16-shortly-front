import axios from "axios";
import { useEffect, useState } from "react";
import UserContext from "../contexts/UserContext.js";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import logo from "../assets/logo.png";
import { ThreeDots } from  'react-loader-spinner';
import styled from "styled-components";
import Url from "./Url.js";

export default function Home(){

    const navigate = useNavigate();
    const [user, setUser] = useState({shortenedUrls: []});
    const { token, setToken } = useContext(UserContext);
    const [enable, setEnable] = useState(false);
    const [url, setUrl] = useState("");
    const [updateList, setUpdateList] = useState(false);

    useEffect(() => {
        if (!token) {
            alert("Você precisa estar logado para acessar essa página!");
            navigate("/");
        }

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
    },[updateList]);

    async function newUrl(e){
        setEnable(true);
        e.preventDefault();

        const body = {
            url
        };

        const config = {
            headers: {
                Authorization: `${token}`
            }
        }

        const promise = axios.post("https://danilo-shortly.herokuapp.com/urls/shorten", body, config);

        promise.then(()=>{
            setEnable(false);
            setUrl("");
            setUpdateList(Math.random());
        })
        .catch((e)=>{
            setEnable(false);
            alert(e.response.data.message);
            console.log(e);
        });

    }

    return (
        <Container>
            <Logo>
                <h2>Shortly</h2>
                <img src={logo} alt="" />
            </Logo>
            <form action="submit" onSubmit={newUrl}>
                <input type="url" disabled={enable} placeholder="Links que cabem no bolso" value={url} onChange={e => setUrl(e.target.value)} required/>
                <button type="submit" disabled={enable}>{enable ? <ThreeDots color="#FFFFFF" height={20} width={50} /> : "Encurtar link"}</button>
            </form>
            <UserUrls>
                {user.shortenedUrls.map((url, index)=> (<Url key={index} id={url.id} shortUrl={url.shortUrl} url={url.url} visitCount={url.visitCount} index={index} user={user} setUser={setUser}/>))}
            </UserUrls>
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
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
        width: 80%;
        margin-bottom: 60px;
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
        width: calc(100% - 100px);
        margin-right: 10px;
    }
    input::placeholder {
        color: #DBDBDB;
    }
    button {
        padding: 8px 0;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        background: #5D9040;
        border-radius: 12px;
        height: 60px;
        width: 200px;
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

const UserUrls = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 93%;
`;