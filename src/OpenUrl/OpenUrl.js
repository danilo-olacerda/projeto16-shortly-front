import styled from "styled-components";
import { useParams } from 'react-router-dom';
import { ThreeDots } from  'react-loader-spinner';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function OpenUrl(){

    const navigate = useNavigate();
    const { shortUrl } = useParams();

    useEffect(()=>{

        const promise = axios.get(`https://danilo-shortly.herokuapp.com/urls/open/${shortUrl}`);
        promise.then((e)=>{
            console.log(e)
        })
        .catch((info)=>{
            if (info.response.status === 404){
                alert("URL não encontrada!");
                navigate("/");
            }
            console.log(info.response.status)
        })

    },[]);

    return(
        <Container>
            Abrindo Url
            <ThreeDots color="green" height={20} width={50} />
        </Container>
    )
}

const Container = styled.div`
    margin-top: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

