import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`

export const ContainerMinor = styled.div`
    background: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    display:flex;
    flex-direction: column;
    gap: 20px;

    h3{
        font-size:24px;
        color: red;
    }
`

export const ContainerButton = styled.div`
display:flex;
justify-content: space-evenly;
flex-direction: row-reverse;

`

export const Button = styled.button`
    background: red;
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 10px;
    cursor: pointer;

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity:0.5;
    }
`