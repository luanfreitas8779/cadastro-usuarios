import styled from "styled-components";

export const UsersContainer = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap:20px;
    margin: 40px 0px;
    height: 45vh;
    width: 55vw;
    overflow-y: auto;

    &::-webkit-scrollbar{
        width: 4px;
        background: #252d48;
    }

    &::-webkit-scrollbar-thumb{
        background: #fff;
    }

    @media (max-widht: 750px){
        grid-template-columns: 1fr;
    }
`

export const CardUsers = styled.div`
    background: #252d48;
    padding: 16px;
    border-radius: 32px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    max-width: 380px;
    max-height: 100vh;

    h3 {
        color: #fff;
        font-size: 24px;
        margin-bottom: 3px;
        text-transform: capitalize;
    }

    p{
        color: #fff;
        font-size: 14px;
        font-weight: 200;
    }
`

export const AvatarUser = styled.img`
    height: 80px;
`


export const TrashIcon = styled.img`
    cursor: pointer;
    padding: 30px;

    &:hover{
        opacity:0.8;
    }

    &:active{
        opacity: 0.5;
    }
`