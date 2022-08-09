import styled from "styled-components";
import trash from "../assets/trashCan.png";
import axios from "axios";
import { useContext } from "react";
import UserContext from "../contexts/UserContext.js";

export default function Url({url, shortUrl, visitCount, id, index, user, setUser}) {

    const { token } = useContext(UserContext);

    function deleteUrl(e){
        e.preventDefault();

        const confirmation = window.confirm("Deseja realmente deletar essa url?");
        if(!confirmation) return;

        const config = {
            headers: {
                Authorization: `${token}`
            }
        }

        const promise = axios.delete(`https://danilo-shortly.herokuapp.com/urls/${id}`, config);

        promise.then(()=>{
            const newUrlList = user.shortenedUrls.filter(url => url.id !== id);
            user.shortenedUrls = newUrlList;
            setUser({...user});
        })
        .catch((e)=>{
            console.log(e);
        });
    }

    return (
        <Container>
            <div>
                <p>{url}</p>
                <p>{shortUrl}</p>
                <p>Quantidade de visitantes: {visitCount}</p>
            </div>
            <span onClick={deleteUrl}>
                <img src={trash} alt="" />
            </span>
        </Container>
    )
}

const Container = styled.div`
    margin-bottom: 30px;
    display: flex;
    height: 60px;
    width: 100%;
    div {
        box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
        border-radius: 12px 0px 0px 12px;
        width: 80%;
        height: 100%;
        background: #80CC74;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 20px;
        padding-right: 100px;
        p {
            font-weight: 400;
            font-size: 14px;
            line-height: 18px;
            color: #FFFFFF;
            text-decoration: none;
        }
    }
    span {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20%;
        border-radius: 0px 12px 12px 0px;
        box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    }
`;